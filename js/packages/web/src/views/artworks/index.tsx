import React, { useEffect, useState, useMemo } from 'react';
import {Masonry} from 'masonic';
import { ArtCard } from '../../components/ArtCard';
import { Layout, Row, Col, Tabs } from 'antd';
// import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { useCreatorArts, useUserArts } from '../../hooks';
import { useMeta } from '../../contexts';
import { CardLoader } from '../../components/MyLoader';
import { useWallet } from '@oyster/common';

const { TabPane } = Tabs;

const { Content } = Layout;

export enum ArtworkViewState {
  Metaplex = '0',
  Owned = '1',
  Created = '2',
}

export const ArtworksView = React.memo( () => {
  const { connected, wallet } = useWallet();
  const ownedMetadata = useUserArts();
  const walletKey = wallet?.publicKey?.toBase58() || '';
  const createdMetadata = useCreatorArts(walletKey);
  const { metadata, isLoading } = useMeta();
  const [activeKey, setActiveKey] = useState(ArtworkViewState.Metaplex);
  const [items, setItems] = useState<any>([]);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {
      const itemsUpdated = selectMetadataByView(activeKey);
      setItems(itemsUpdated.slice(0, 10));
      // console.log('itemsUpdated', itemsUpdated.length);

  }, [activeKey, ownedMetadata, createdMetadata, metadata]);

  // useEffect(() => {
  //   console.log('wallet changed...');
  // }, [wallet]);

  // useEffect(() => {
  //   console.log('connected changed...');
  // }, [connected]);

  // useEffect(() => {
  //   console.log('activeKey changed...');
  // }, [activeKey]);

  // useEffect(() => {
  //   console.log('ownedMetadata changed...');
  // }, [ownedMetadata]);

  // useEffect(() => {
  //   console.log('createdMetadata changed...');
  // }, [createdMetadata]);

  // useEffect(() => {
  //   console.log('metadata changed...');
  // }, [metadata]);

  const selectMetadataByView = (key: ArtworkViewState) => {
    switch (key) {
      case ArtworkViewState.Owned:
        return ownedMetadata.map(m => m.metadata);
      case ArtworkViewState.Created:
        return createdMetadata;
      default:
        return metadata;
    }
  }

  useEffect(() => {
    if(connected) {
      setActiveKey(ArtworkViewState.Owned);
    } else {
      setActiveKey(ArtworkViewState.Metaplex);
    }
  }, [connected, setActiveKey]);

  // const artworkGrid = (

  //   <Masonry
  //     // breakpointCols={breakpointColumnsObj}
  //     className="my-masonry-grid"
  //     // columnClassName="my-masonry-grid_column"
  //   >
  //     {!isLoading
  //       ? [...items].map((m, idx) => {
  //           const id = m.pubkey.toBase58();
  //           return (
  //             <Link to={`/art/${id}`} key={idx}>
  //               <ArtCard
  //                 key={id}
  //                 pubkey={m.pubkey}
  //                 preview={false}
  //                 height={250}
  //                 width={250}
  //               />
  //             </Link>
  //           );
  //         })
  //       : [...Array(10)].map((_, idx) => <CardLoader key={idx} />)}
  //   </Masonry>

  // );



  return useMemo(() => (
    <Layout style={{ margin: 0, marginTop: 30 }}>
      <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Col style={{ width: '100%', marginTop: 10 }}>
          <Row>
            <Tabs
              activeKey={activeKey}
              onTabClick={key => setActiveKey(key as ArtworkViewState)}
            >
              <TabPane
                tab={<span className="tab-title">All</span>}
                key={ArtworkViewState.Metaplex}
              >
                <ArtworkGrid isLoading={isLoading} items={items} />
              </TabPane>
              {connected && (
                <TabPane
                  tab={<span className="tab-title">Owned</span>}
                  key={ArtworkViewState.Owned}
                >
                  <ArtworkGrid isLoading={isLoading} items={items} />
                </TabPane>
              )}
              {connected && (
                <TabPane
                  tab={<span className="tab-title">Created</span>}
                  key={ArtworkViewState.Created}
                >
                  <ArtworkGrid isLoading={isLoading} items={items} />
                </TabPane>
              )}
            </Tabs>
          </Row>
        </Col>
      </Content>
    </Layout>
  ), [activeKey, isLoading, connected, items]);
});

const ArtworkGrid2 = () => <div>hello</div>;

const ArtworkGrid = React.memo(({ isLoading, items }: any) => {
  if (isLoading) {
    return (
      <>
        {[...Array(10)].map((_, idx) => <CardLoader key={idx} />)}
      </>
    );
  }

  console.log('items',items);
  // const trimmedItems = items.slice(0, 3);
  // console.log('trimmedItems', JSON.stringify(trimmedItems));

  return (
    <Masonry
      items={items}
      render={MasonryCard}
      columnGutter={16}
      columnWidth={200}
      // Pre-renders N grid cells outside of the visible window
      overscanBy={2}
      itemKey={(data: any) => {
        const id = data.pubkey.toBase58();
        return id;
      }}
    />
  );
});

const MasonryCard = React.memo(({idx, data, width}: any) => {
  // console.log('props', data);

  const id = data.pubkey.toBase58();
  return (
    <Link to={`/art/${id}`} key={id}>
      <ArtCard
        key={id}
        pubkey={data.pubkey}
        preview={false}
        height={250}
        width={250}
      />
    </Link>
  );
  // return <div>Div</div>
});
