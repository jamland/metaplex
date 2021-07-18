import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Tabs, Button, Divider } from 'antd';
import { InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

import { MeshViewer } from '../../components/MeshViewer';

import './index.less';

const { TabPane } = Tabs;

const { Content, Footer } = Layout;
const heroImageCenter = '/landing/tee.glb';
const heroImageLeft = '/landing/trucker.png';
const heroImageRight = '/landing/trucker.png';
const rapperModel = '/landing/rapper.glb';
const rapperImage = '/landing/rapper.png';
const personImage = '/landing/person.png';

export const LandingView = () => {
  return (
    <Layout className="landing-screen">
      <Layout>
        <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Row className="hero-section">
            <Col span={8}>
              <img src={heroImageLeft} alt="" />
              <br />
              <br />
              <br />
              <p>Покупайте и продавайте NFT айтемы на аукционе за криптовалюту.</p>
              <Button>Auction</Button>
            </Col>
            <Col span={8}>
              <MeshViewer
                url={heroImageCenter}
                className="artwork-image"
                style={{ width: '100%' }}
                withGui={true}
              />
            </Col>
            <Col span={8}>
              <img src={heroImageRight} />
              <br />
              <br />
              <br />
              <p>
                Ваш виртуальный мерч. Уникальные лимитированные айтемы, которые
                будут у вас до тех пор пака существует интернет или вы не решите от него избавится.
              </p>
              <Button>Детали Проекта</Button>
            </Col>
          </Row>

          <Divider />

          <Row className="with-radial-bg">
            <Col xs={24} md={14} style={{ display: 'flex' }}>
              {/* <MeshViewer
                url={rapperModel}
                className="artwork-image"
                style={{ width: '100%' }}
              /> */}
              <img src={personImage} className="middle-section-image-02" />
              <img src={rapperImage} className="middle-section-image" />
            </Col>
            <Col xs={24} md={10}>
              <h1 className="section-title">
                💎 <span className="gradient-blue-purple">NFT MERCH</span>
              </h1>
              <h3 className="section-subtitle">by UKRATRAX</h3>
              <p>
                Ukratrax представляет пространство, где каждый может найти мерч,
                созданный музыкантами и артистами. Собирайте, покупайте и
                продавайте NFT айтемы на аукционе с другими юзерами. NFT мерч
                айтемы создаются в лимитированном количестве и хранятся на вашем
                кошельке (в блокчейне Solana).
              </p>
              <p>Подписывайтесь в Инсте чтобы узнать о будущих эйр дропах.</p>

              <br />
              <Button type="primary" size="large"> Смотрите Коллекции →</Button>
              <br />
              <br />
              <br />
            </Col>
          </Row>

          <Divider style={{ marginTop: 0 }} />
        </Content>
      </Layout>
      <Footer className="footer">
        <div className="footer-links">
          <span className="footer-title">UTX STORE</span>
          <span className="footer-copy">© 2021</span>
          <span>
            <Link to={`/about`}>
              <span className="footer-copy">About</span>
            </Link>
          </span>
          <span>
            <a href="https://www.instagram.com/ukratrax/" target="_blank">
              <InstagramOutlined style={{ fontSize: '150%' }} />
            </a>
          </span>
          {/* <span>
            <a href="https://www.instagram.com/ukratrax/" target="_blank">
              <TwitterOutlined style={{ fontSize: '150%'}} />
            </a>
          </span> */}
          <span></span>
        </div>
      </Footer>
    </Layout>
  );
};
