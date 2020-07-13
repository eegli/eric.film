import React from 'react';
import {
  BgContainer,
  IntroContainer,
} from '@/components/categories/card-categories/shared.styles';
import { Table } from './dev-category.styles';
const DevCategory: React.FC = () => {
  return (
    <>
      <IntroContainer dev>
        <p>
          <span>eric.film</span>
        </p>
      </IntroContainer>
      <BgContainer dev>
        <Table>
          <tbody>
            <tr>
              <th>description</th>
              <td>My personal website and blog</td>
            </tr>
            <tr>
              <th>supported browsers</th>
              <td>Chrome, Safari, Firefox</td>
            </tr>
            <tr>
              <th>languages</th>
              <td>Typescript, Javascript</td>
            </tr>
            <tr>
              <th>framework</th>
              <td>Next.js</td>
            </tr>
            <tr>
              <th>backend</th>
              <td>GraphCMS, GraphQL</td>
            </tr>
            <tr>
              <th>frontend</th>
              <td>
                React.js, Apollo Client, React Markdown, Styled Components
              </td>
            </tr>
            <tr>
              <th>test coverage</th>
              <td>0%</td>
            </tr>
            <tr>
              <th>hosting & cd/ci</th>
              <td>Vercel</td>
            </tr>
            <tr>
              <th>tracking</th>
              <td>Google Analytics</td>
            </tr>
            <tr>
              <th>monitoring</th>
              <td>Sentry</td>
            </tr>
            <tr>
              <th>repository</th>
              <td>private</td>
            </tr>
          </tbody>
        </Table>
      </BgContainer>
    </>
  );
};

export default DevCategory;
