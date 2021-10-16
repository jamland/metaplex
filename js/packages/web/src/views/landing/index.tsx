import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
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
              <h3>digital NFT things</h3>
              <p style={{ textAlign: 'left' }}>
                Limited unique items you can keep until the Internet works (or
                until you decide to get rid of them).
              </p>

              <a href="https://digitaleyes.market/collections/UTX%20MRAK" target="_blank">
                <Button type="primary" style={{ marginBottom: '1em' }}>
                  Second Market
                </Button>{' '}
              </a>
              <Link to="/about">
                <Button>Project Details</Button>
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
                />
              </ErrorBoundary>
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
                Ukratrax presents you a space where eveyone can find merch
                created by musicians and artists. Collect, buy and sell NFT
                items on action with other users. NFT merch items are made in
                limited edition and can be kept on your wallet (in solana
                blockchain)
              </p>
              <p>
                Follow us on Twitter and Insta to know about further airdrops!
              </p>

              <br />
              <a href="https://twitter.com/ukratrax" target="_blank">
                <Button type="primary" size="large">
                  {' '}
                  Collections →
                </Button>
              </a>
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
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <small>{error.message}</small>
      <br />
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
}
