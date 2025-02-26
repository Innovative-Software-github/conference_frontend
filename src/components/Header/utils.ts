import { ROUTES } from '../../constants/Routes';
import { IHeaderDropdownOptions } from './HeaderDropdown/HeaderDropdown/HeaderDropdown';

export const DEFAUL_ROUTES_DROPDOWN_MENU: IHeaderDropdownOptions[] = [
  {
    label: 'Аккаунт',
    href: ROUTES.profile.index,
  },
  {
    label: 'Мои события',
    href: ROUTES.profile.events,
  },
  {
    label: 'Мои сообщества',
    href: ROUTES.profile.communities,
  },
];

export const DEFAUL_ROUTES_DROPDOWN_MENU_NOT_AUTH: IHeaderDropdownOptions[] = [
  {
    label: 'Логин',
    href: ROUTES.login,
  },
  {
    label: 'Зарегистрироваться',
    href: ROUTES.registation,
  },
]