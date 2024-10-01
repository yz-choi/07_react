import menus from "../data/Coffee-menu.json";

export function getMenuList()
{
    return menus;
}

export function getMenuDetail(menuCode)
{
    return menus.filter(menu=>menu.id===parseInt(menuCode))[0];
}
