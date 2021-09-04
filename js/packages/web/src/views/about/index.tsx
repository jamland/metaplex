import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import { Footer } from '../../components/Footer';

const { Content } = Layout;

export const AboutView = () => {
  return (
    <Layout className="about-screen">
      <Layout>
        <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Row>
            <Col span={18}>
              <h1 style={{ fontSize: '2em', lineHeight: '1em' }}>
                <span style={{ fontSize: '2em', lineHeight: '2em' }}>
                  👕 🧢 😵‍💫 👾
                </span>{' '}
                <br />
                <span>Your digital NFT things</span>
              </h1>
            </Col>
            <Col span={16}>
              <br />
              <br />
              <h2>🪂 Free Airdrops</h2>

              <p>
                👉 Follow us on{' '}
                <a href="https://www.instagram.com/ukratrax" target="_blank">
                  Insta
                </a>
                ,{' '}
                <a href="https://twitter.com/ukratrax" target="_blank">
                  Twitter
                </a>
                ,{' '}
                <a href="https://www.tiktok.com/@ukratrax" target="_blank">
                  TikTok
                </a>
              </p>
              <p>
                🎉 We have released first pack of 28 unique items from ⚡️801
                musician. Follow him on{' '}
                <a href="https://soundcloud.com/phunky801" target="_blank">
                  souncloud
                </a>
              </p>
              <p>
                🎉 Next pack will be released in September and will be from visual artist Denys Metelin. Follow him on{' '}
                <a href="https://www.instagram.com/metelin_denys/" target="_blank">
                  instagram
                </a>
              </p>
            </Col>
          </Row>

          <Divider />
        </Content>
      </Layout>

      <Footer />
    </Layout>
  );
};
