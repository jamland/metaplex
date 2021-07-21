import React from 'react';
import { Layout, Row, Col, Tabs, Button, Divider } from 'antd';
import { InstagramOutlined } from '@ant-design/icons';

import { MeshViewer } from '../../components/MeshViewer';

const { TabPane } = Tabs;

const { Content, Footer } = Layout;
const heroImageCenter = '/landing/tee.glb';
const heroImageLeft = '/landing/trucker.png';
const heroImageRight = '/landing/trucker.png';
const rapperModel = '/landing/rapper.glb';
const rapperImage = '/landing/rapper.png';
const personImage = '/landing/person.png';

export const AboutView = () => {
  return (
    <Layout className="landing-screen">
      <Layout>
        <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Row>
            <Col span={8}>
              <div>
                <img src={heroImageLeft} alt="" />
              </div>
              <p>All active items you can find on auction</p>
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
              <Button>All Existing Items</Button>
              <br />
              <Button>About Project</Button>
            </Col>
          </Row>

          <Divider />

          <Row className="with-radial-bg">
            <Col xs={24} md={14} style={{display: 'flex'}}>
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
                Ukratrax presents space where people can find merch made by they
                favarable artists and musicians. Colect, sell and buy NFT items
                on auction, exchange it with other people. Read about technical
                apects
              </p>
              <Button> Explore Collections →</Button>
            </Col>
          </Row>

          <Divider style={{marginTop: 0}} />
        </Content>
      </Layout>
      <Footer>
        <div className="footer-links">
          <span className="footer-title">UTX STORE</span>
          <span className="footer-copy">© 2021</span>
          <span>About</span>
          <span>
              <InstagramOutlined />
          </span>
          <span>Twitter</span>
          <span>Soundcloud</span>
        </div>
      </Footer>
    </Layout>
  );
};
