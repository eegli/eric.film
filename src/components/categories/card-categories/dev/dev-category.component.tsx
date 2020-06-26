import React from 'react';
import { BgContainer } from '@/components/categories/card-categories/shared.styles';
import { Sh2 } from '@/shared/headings.styles';
import { Table } from './dev-category.styles';
const DevCategory: React.FC<{}> = () => {
  return (
    <BgContainer>
      <Sh2>dev COMP</Sh2>
      <Table>
        <tr>
          <th>project</th>
          <td>eric.film</td>
        </tr>
        <tr>
          <th>supported platforms</th>
          <td>Chrome, Safari, Firefox</td>
        </tr>
        <tr>
          <th>languages</th>
          <td>Typescript, Javascript</td>
        </tr>
        <tr>
          <th>frameworks</th>
          <td>Next.js</td>
        </tr>
        <tr>
          <th>backend</th>
          <td>GraphCMS, GraphQL</td>
        </tr>
        <tr>
          <th>frontend</th>
          <td>Next.js, Apollo Client, React Markdown, Styled Components</td>
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
      </Table>
    </BgContainer>
  );
};

export default DevCategory;
