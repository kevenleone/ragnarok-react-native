import gql from 'graphql-tag';

const ItemFragment = gql`
  fragment ItemFragment on ItemDB {
    id
    name_english
    name_japanese
    icon
    type
    price_buy
    price_sell
    weight
    atk
    matk
    defence
    range
    slots
    equip_jobs
    equip_upper
    equip_genders
    equip_locations
    weapon_level
    equip_level_min
    equip_level_max
    refineable
    view
    bindonequip
    forceserial
    buyingstore
    delay
    trade_flag
    trade_group
    nouse_flag
    nouse_group
    stack_amount
    stack_flag
    sprite
    script
    equip_script
    unequip_script
  }
`;

export { ItemFragment };
