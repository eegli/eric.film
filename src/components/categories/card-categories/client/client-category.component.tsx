import React from 'react';
import {
  BgContainer,
  IntroContainer,
} from '@/components/categories/card-categories/shared.styles';
import { Sh2 } from '@/shared/headings.styles';
import { Container, Client } from './client-category.styles';

const ClientCategory: React.FC = () => {
  return (
    <>
      <IntroContainer>
        <p>
          Over the past years, I've had the pleasure of working together with
          many amazing <span>artists</span>, <span>companies</span> and other{' '}
          <span>freelancers</span>.
        </p>
        <p>Thank you, guys!</p>
      </IntroContainer>
      <BgContainer>
        <Container>
          <Client href='https://www.frederikmaarsen.com/' target='blank'>
            <img src='/static/img/clients/frederikmaarsen.png' />
          </Client>
          <Client href='https://mx3.ch/tawnee' target='blank'>
            <img src='/static/img/clients/tawnee_.png' />
          </Client>
          <Client href='http://www.cinezerbato.com/' target='blank'>
            <img src='/static/img/clients/cinezerbato.png' />
          </Client>
          <Client href='https://track13.ch' target='blank'>
            <img src='/static/img/clients/track13_.png' />
          </Client>
          <Client href='https://www.claudegabriel.ch/' target='blank'>
            <img src='/static/img/clients/claudegabriel.png' />
          </Client>
          <Client href='https://kommunikationsplan.ch/en/' target='blank'>
            <img src='/static/img/clients/komplan.png' />
          </Client>
          <Client href='https://www.pfizer.ch/' target='blank'>
            <img src='/static/img/clients/pfizer.png' />
          </Client>
          <Client href='https://www.milcomp.ch/' target='blank'>
            <img src='/static/img/clients/milcomp.png' />
          </Client>
          <Client href='http://www.placeb.ch/' target='blank'>
            <img src='/static/img/clients/placeB_.png' />
          </Client>
          <Client href='http://www.absolute.ch/de/' target='blank'>
            <img src='/static/img/clients/absolute.png' />
          </Client>
          <Client href='https://www.youmo.ch/' target='blank'>
            <img src='/static/img/clients/yumo.png' />
          </Client>
          <Client href='https://zueriost.ch/' target='blank'>
            <img src='/static/img/clients/zuriost.png' />
          </Client>
        </Container>
      </BgContainer>
    </>
  );
};

export default ClientCategory;
