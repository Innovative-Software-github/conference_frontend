'use client'

import * as React from 'react'

import { Icon, IconType } from 'ui-kit-conf/dist';
import cls from './HeaderMenu.module.scss';
import { SquareButton } from '../../../ui/SquareButton/SquareButton';
import { HeaderDropdown } from './HeaderDropdown/HeaderDropdown';
import { DEFAUL_ROUTES_DROPDOWN_MENU, DEFAUL_ROUTES_DROPDOWN_MENU_NOT_AUTH } from '../utils';

export interface IHeaderMenu {
  isUserAuth: boolean;
}

export const HeaderMenu: React.FC<IHeaderMenu> = ({
  isUserAuth,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div>
      <SquareButton
        className={cls.link}
        onClick={() => setIsMenuOpen(prev => !prev)}>
        <Icon type={IconType.Profile_20} width={20} height={20} />
      </SquareButton>
      <HeaderDropdown
        isOpen={isMenuOpen}
        options={isUserAuth ? DEFAUL_ROUTES_DROPDOWN_MENU : DEFAUL_ROUTES_DROPDOWN_MENU_NOT_AUTH}
        onCloseMenu={() => setIsMenuOpen(false)}
      />
    </div >
  )
}