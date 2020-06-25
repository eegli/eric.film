import React from 'react';
import { BgContainer } from '@/components/categories/card-categories/shared.styles';
import { Sh2 } from '@/shared/headings.styles';
import { Container } from './client-category.styles';

const ClientCategory: React.FC = () => {
  return (
    <BgContainer>
      <Container>
        <p>
          Over the past years, I've had the pleasure of working together with
          many amazing artists and companies. Thank you, guys!
        </p>
      </Container>
    </BgContainer>
  );
};

export default ClientCategory;
