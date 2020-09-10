import { CategoryWrapper } from '@/components/categories/card-common/shared.styles';
import { Table } from './dev-category.styles';
const DevCategory: React.FC = () => {
  return (
    <>
      <CategoryWrapper dev>
        <Table>
          <tbody>
            <tr>
              <th>project</th>
              <td>eric.film</td>
            </tr>
            <tr>
              <th>description</th>
              <td>My personal website and blog</td>
            </tr>
            <tr>
              <th>languages</th>
              <td>Typescript</td>
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
              <td>7% (wip)</td>
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
              <td>
                <a
                  href='https://github.com/eegli/eric.film'
                  target='_blank'
                  rel='noopener noreferrer'>
                  View on Github
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </CategoryWrapper>
    </>
  );
};

export default DevCategory;
