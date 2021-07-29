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
                <span>Твои виртуальные вещи от музыкантов и артистов</span>
              </h1>
            </Col>
            <Col span={16}>
              <br />
              <br />
              <h2>🪂 Free Airdrops</h2>

              <p>
                👉 Подписывайтесь в{' '}
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
                , чтоб узнать условия участия и новости о новых айтемах.
              </p>
              <p>
                Ukratrax - это аукцион NFT мерч айтемов от музыкантов и
                артистов. Артисты создают виртуальные вещи в лимитированной
                коллекции. Получай эти айтемы эирдропами, покупай-продавай,
                обменивай на платформе Ukratrax Store. 🎉 Первый пак с 20 💎
                бесплатными вещами уже в течении месяца!
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
