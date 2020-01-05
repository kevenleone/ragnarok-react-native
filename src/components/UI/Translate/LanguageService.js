/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import i18N from '../../../i18N';
import * as Language from 'expo-localization'

/**
 *
 * @private
 * @param {type} instance
 * @param {type} key
 * @param {type} others
 * @returns {undefined}
 */
const replaceOthers = (instance, key, dict, others = {}) => {
  let value = key; let
    tmp;
  const valueSplit = value.split('{');
  for (const item in valueSplit) {
    tmp = valueSplit[item].substr(0, valueSplit[item].indexOf('}'));
    if (tmp) {
      /* Aplicando dict */
      if (dict[tmp]) {
        value = value.replace(`{${tmp}}`, dict[tmp]);
      }
      /* Aplicando others */
      if (others[tmp]) {
        value = value.replace(`{${tmp}}`, others[tmp]);
        // value = dict[value];
      }
    }
  }
  /**/
  if (value.indexOf('{') > -1 && instance.tries) {
    instance.tries--;
    value = replaceOthers(instance, value, dict, others);
  }
  /**/
  instance.tries = 10;
  return value;
};

class LanguageService {
  static KEY_LANG = 'rota-language';

  constructor() {
    this.tries = 10;
    this.getUserLanguage = this.getUserLanguage.bind(this);
    this.translate = this.translate.bind(this);
  }

  /**
   * Método que detecta a linguagem do usuário
   * @returns {object} Retorna o dicionário de acordo com o idioma definido
   */
  getUserLanguage() {
    // verifica se esta definido no localstorage
    const localLang = Language.locale;
    if (typeof localLang === 'string' && i18N[localLang]) {
      // Usa as configurações do usuário
      return i18N[localLang];
    }
    // pega do window.navigatoer.language
    const winLanguage = localLang;
    if (winLanguage && i18N[winLanguage]) {
      return i18N[winLanguage];
    }
    // caso o idioma de window.navigatoer.language não exista no projeto,
    // testa os de window.navigatoer.languages
    const winLanguages = localLang;
    if (Array.isArray(winLanguages)) {
      for (const item in winLanguages) {
        if (i18N[winLanguages[item]]) {
          return i18N[winLanguages[item]];
        }
      }
    }
    // Usa as definições do projeto
    const lang = 'pt-BR';
    if (typeof lang === 'string' && i18N[lang]) {
      return i18N[lang];
    }
    // caso nehum exista, usa o padrão, a primeira
    return i18N[Object.keys(i18N)[0]];
  }

  /**
   * Método que retorna o valor para a chave informada
   * @param {String|Array} key A chave a ser buscada ou array de chaves para o caso de plural
   * @param {object} others Dados para serem inseridos na string a ser retornada
   * @returns {String}
   */
  translate(key, others) {
    if (Array.isArray(key)) {
      // Para entrada de arrays
      if (key.length !== 3) {
        throw new Error('Quantidade de parâmetros inválida');
      }
      if (!Object.isObject(others)) {
        throw new TypeError('Os parâmetros adicionais do dicionário são innválidos, tem que ser um objeto!');
      }
      const parameter = key[2];
      if (typeof others[parameter] !== 'number') {
        throw new TypeError('O tipo do párametro de teste para o plural é inválido');
      }
      if (others[parameter] === 1) {
        return this.translate(key[1], others);
      }
      return this.translate(key[0], others);
    } if (typeof key === 'string') {
      // Para entradas simples
      const dict = this.getUserLanguage();
      let value = dict[key] || key;
      if (typeof value === 'function') {
        value = value(dict);
      }
      /**/
      value = replaceOthers(this, value, dict, others);
      return value;
    }
    // Para erros de tipo
    throw new TypeError('Tipo da chave inválido');
  }
}
/**/
export default LanguageService;
