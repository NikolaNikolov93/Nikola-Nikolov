//Styled components import
import {
  BackLink,
  Description,
  Illustration,
  PageContainer,
  SubHeading,
} from "./NotFound.styles";

/**
 *
 * @returns React functional component to be used as "404" page.
 */
const PageNotFound: React.FC = () => {
  return (
    <PageContainer>
      <SubHeading>Page Not Found</SubHeading>
      <Description>
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </Description>
      <BackLink to="/">Go Back Home</BackLink>
      <Illustration>
        <img src="/404.png" alt="" />
      </Illustration>
    </PageContainer>
  );
};

export default PageNotFound;
