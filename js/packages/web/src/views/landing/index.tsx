import React from 'react';
import { Link } from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary';
import { Layout, Row, Col, Button, Divider } from 'antd';

import { MeshViewer } from '../../components/MeshViewer';
import { Footer } from '../../components/Footer';

const { Content } = Layout;
const heroImageCenter = '/landing/tee.glb';
const heroImageLeft = '/landing/trucker.png';
const rapperImage = '/landing/rapper.png';
const personImage = '/landing/person.png';

export const LandingView = () => {
  return (
    <Layout className="landing-screen">
      <Layout>
        <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Row className="hero-section">
            <Col xs={24} md={8} style={{ textAlign: 'center' }}>
              <img src={heroImageLeft} alt="" />
              <br />
              <br />
              <br />
              <h3>Твои виртуальные NFT вещи</h3>
              <p>
                Покупайте и продавайте NFT айтемы на аукционе за криптовалюту.
              </p>
              <Link to="/auctions">
                <Button type="primary" style={{marginBottom: '1em'}}>
                  Аукцион
                </Button>{' '}
              </Link>
              <Link to="/about">
                <Button>Детали Проекта</Button>
              </Link>
            </Col>

            <Col xs={24} md={16} className="hero-mesh">
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => {
                  // reset the state of your app so the error doesn't happen again
                }}
              >
                <MeshViewer
                  url={heroImageCenter}
                  className="artwork-image"
                  style={{ width: '100%' }}
                  withGui={true}
                />
              </ErrorBoundary>
            </Col>
          </Row>

          <Row className="description-section">
            <Col xs={24} md={16}>
              <p style={{ textAlign: 'left' }}>
                Уникальные лимитированные айтемы, которые будут у вас до тех пор
                по существует интернет или вы не решите от них избавится.
              </p>
            </Col>
          </Row>

          <Divider />

          <Row className="with-radial-bg">
            <Col xs={24} md={14} style={{ display: 'flex' }}>
              <img src={personImage} className="middle-section-image-02" />
              <img src={rapperImage} className="middle-section-image" />
            </Col>
            <Col xs={23} md={10} className="more-info-section">
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
              <p>
                Подписывайтесь в Инсте и ТикТоке, чтобы узнать о будущих
                эйр-дропах.
              </p>

              <br />
              <Link to="/artists">
                <Button type="primary" size="large">
                  {' '}
                  Смотрите Коллекции →
                </Button>
              </Link>
              <br />
              <br />
              <br />
            </Col>
          </Row>

          <Divider style={{ marginTop: 0 }} />
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
};

interface ErrorProps {
  error: Error,
  resetErrorBoundary: () => void
}

function ErrorFallback({error, resetErrorBoundary}: ErrorProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <small>{error.message}</small>
      <br />
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  )
}
