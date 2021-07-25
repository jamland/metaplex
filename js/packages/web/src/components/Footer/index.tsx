import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import { InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
const TikTokLogo = '/landing/tiktok-logo.svg';


const { Content, Footer: FooterAnt } = Layout;

export const Footer = () => {
  return (
    <FooterAnt className="footer">
      <div className="footer-links">
        <Link to={`/`}>
          <span className="footer-title">UTX STORE</span>
        </Link>

        <span className="footer-copy">© 2021</span>

        <Link to={`/about`}>
          <span className="footer-copy">About</span>
        </Link>

        <span>
          <a href="https://www.instagram.com/ukratrax" target="_blank">
            <InstagramOutlined style={{ fontSize: '180%' }} />
          </a>
        </span>

        <span>
          <a href="https://twitter.com/ukratrax" target="_blank">
            <TwitterOutlined style={{ fontSize: '180%' }} />
          </a>
        </span>

        <span>
          <a href="https://www.tiktok.com/@ukratrax" target="_blank">
            <img src={TikTokLogo} width="30" />
          </a>
        </span>
      </div>
    </FooterAnt>
  );
};
