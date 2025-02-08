'use client';

import { Icon, IconType } from 'ui-kit-conf/dist';
import Link from 'next/link';

import { ConstraintContainer } from '@/ui/ConstraintContainer/ConstaintContainer';
import { TELEGRAM_LINK } from '@/constants/Constants';

import cls from './Footer.module.scss'

export const Footer = () => (
    <footer className={cls.footer}>
        <ConstraintContainer>
            <div>
                <Icon type={IconType.Logotype_white} width={180} height={20} isScalable />
            </div>

            <div className={cls.socialLinks}>
                <Link className={cls.socialLink} href={TELEGRAM_LINK} target="_blank">
                    <Icon type={IconType.TGLink_44} width={44} height={44} />
                </Link>
            </div>

            <div className={cls.info}>
                <div className={cls.infoBlock}>&copy; IT-Event-Hub, 2023—2024</div>
                <ul className={cls.infoBlock}>
                    <Link href='/' target="_blank"><li>Политика конфиденциальности</li></Link>
                    <Link href='/' target="_blank"><li>Правила использования</li></Link>
                </ul>
                <ul className={cls.infoBlock}>
                    <Link href='/' target="_blank"><li>Предложить мероприятие</li></Link>
                    <Link href='/' target="_blank"><li>Сообщества</li></Link>
                </ul>
                <ul className={cls.infoBlock}>
                    <li>г. Москва, ул. Иванова, 32</li>
                    <li>+7 989 764-49-59</li>
                </ul>
            </div>
        </ConstraintContainer>
    </footer>
)