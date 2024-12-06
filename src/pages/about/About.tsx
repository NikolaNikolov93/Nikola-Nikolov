//Import Information from the constnats
import { myInfo } from "../../lib/constants/constants";

//Custom hook import
import useFetchCertificates from "../../lib/hooks/useFetchCertificates";

//Styled components import
import {
  AboutWrapper,
  CertifcatesWrapper,
  Wrapper,
  ListItem,
  ListP,
  ListImg,
  Footer,
} from "./About.styles";

//Components import
import CertificateCard from "./CertificateCard";
import CertificateCardSkeleton from "./CertificateCardSkeleton";

/**
 *
 * @returns React functional component that that renders the About page.
 */
const About = () => {
  //Fetch data using the custom hook with React Query implementation.
  const { isLoading, isPending, error, data } = useFetchCertificates();

  return (
    <Wrapper>
      <AboutWrapper>
        <ul>
          {myInfo.map((infoItem, index) => (
            <ListItem key={index}>
              <ListP
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                initial={
                  index % 2 == 0
                    ? { x: -50, opacity: 0 }
                    : { x: 50, opacity: 0 }
                }
              >
                {infoItem.text}
              </ListP>
              <ListImg
                src={infoItem.img}
                alt={infoItem.img}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                initial={
                  index % 2 == 0
                    ? { x: 50, opacity: 0 }
                    : { x: -50, opacity: 0 }
                }
              ></ListImg>
            </ListItem>
          ))}
        </ul>
      </AboutWrapper>
      {isLoading && <h2>Loading certificates...</h2>}
      <CertifcatesWrapper>
        {isPending && (
          <>
            <CertificateCardSkeleton />
            <CertificateCardSkeleton />
            <CertificateCardSkeleton />
          </>
        )}
        {error && <p>Error</p>}
        {data?.map((course) => (
          <CertificateCard
            key={course.id}
            id={course.id}
            name={course.name}
            url={course.certificateImg}
          />
        ))}
      </CertifcatesWrapper>

      <Footer>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          provident ea corporis adipisci, sit accusantium magni ipsa cupiditate
          minima voluptates! Ab nisi iste ducimus dolore voluptas labore, rem
          sint enim quas recusandae architecto quae numquam vel quibusdam
          voluptatem eos illum vero, rerum doloribus eveniet distinctio!
          Suscipit deleniti provident inventore natus error totam quaerat
          similique repellendus corrupti, corporis maxime quasi dolorum officiis
          dolore veniam repellat modi atque. Velit molestiae incidunt ratione
          consectetur non maiores, id consequatur alias, ex fugit labore nulla
          similique voluptates, iure quia quaerat a nesciunt architecto ducimus
          nobis dolore reiciendis ad? Alias perspiciatis debitis, nihil ab minus
          culpa aliquid similique perferendis hic repellendus voluptas assumenda
          distinctio dignissimos temporibus porro natus, a laborum delectus
          nisi. Corporis accusamus odit rem facilis asperiores sit impedit, eos
          laborum est perspiciatis totam sequi mollitia sed at sint quo nesciunt
          et perferendis rerum! Eligendi, sed officiis. Excepturi, deleniti a ex
          quis iste expedita cumque, officiis repellendus illum iure facilis,
          dolor autem. Eum sed nostrum consequuntur doloremque asperiores quis,
          maiores, aliquam, ea pariatur voluptatem quam ratione ex explicabo!
          Adipisci excepturi exercitationem placeat itaque distinctio nesciunt
          alias. Culpa minima libero sunt dolore non voluptas nemo optio eaque
          amet reprehenderit? Cupiditate est sit tempore, nam expedita id
          quibusdam nesciunt! Totam velit delectus dolorum tenetur distinctio
          dolor modi reprehenderit voluptates molestiae! Aperiam voluptas
          assumenda perferendis iusto incidunt ratione consequuntur, doloremque
          doloribus. Id excepturi accusantium sequi voluptate eius ab!
          Cupiditate veritatis reprehenderit, ad deleniti dolores asperiores
          repudiandae architecto impedit repellendus dolor atque voluptatem
          saepe optio minus! Ipsum possimus qui provident sed amet molestias
          voluptate mollitia? Consequatur, facere delectus porro maxime nesciunt
          tempore repellendus in sed illum, cupiditate iste ipsam impedit
          consequuntur voluptatum velit? Quae, culpa sequi rerum nam impedit
          cupiditate tempora dignissimos. Nemo repellat ut necessitatibus quis
          aliquam pariatur voluptate nisi tenetur hic consequuntur, nulla fugit
          quaerat optio at, placeat est! Beatae quis omnis porro, iure ut ullam
          alias eius quod debitis recusandae? Veritatis delectus neque quo
          fugiat, quaerat numquam, quidem velit corrupti unde molestias quae rem
          tempora cum dolorum dolore quasi harum vel id voluptatem quam. Dolor
          doloribus cumque ut impedit rem minima illum corporis eius blanditiis
          ducimus! Quod minima accusamus repudiandae quasi consequuntur illum
          quisquam, est corporis sit voluptatibus quia nesciunt magnam
          aspernatur repellat vel nobis facilis pariatur! Animi tenetur omnis
          soluta ut commodi placeat, nostrum nobis modi vel repellendus
          aspernatur odit ad voluptatem provident fuga facere voluptates
          consectetur deleniti expedita eaque distinctio magni. Voluptatibus
          dolorum iste, quis, libero laborum nostrum, aut iure quae recusandae
          molestias voluptatum rerum omnis tempore dignissimos in obcaecati
          neque amet quasi deleniti eos. Sint quibusdam quidem et quis tempore
          repudiandae temporibus ab vero, maxime sequi aperiam fugiat est quo
          sapiente obcaecati, rerum, minima numquam officia distinctio saepe!
          Totam praesentium rem error eligendi quae iusto tempore reiciendis
          fugiat quaerat itaque sint tenetur maxime vero quis voluptatem velit
          voluptas deleniti facere consequuntur, quasi soluta iure adipisci.
          Iure incidunt eum, excepturi autem at fugit nihil repellendus eveniet
          quas saepe ipsum nobis rerum, exercitationem, provident quod!
          Dignissimos quis qui amet. Neque modi, commodi mollitia veritatis nam
          quod aperiam tempora! Eos accusantium amet, vel incidunt doloremque
          voluptates eum consectetur. Nobis atque laboriosam dignissimos
          voluptas sed repellendus vitae, quidem laborum architecto sequi
          accusamus, quae magnam. Qui fugit, iusto vel reprehenderit dolorem
          omnis. Sapiente totam aperiam sint! Eveniet tempora nesciunt nam
          voluptatibus consectetur esse nobis veritatis voluptate minus
          accusamus sit vero sunt aperiam delectus vel culpa consequatur fuga
          mollitia, reiciendis optio doloremque sequi commodi ut animi. Iste
          deleniti temporibus aut sequi aperiam numquam eos exercitationem,
          necessitatibus voluptates omnis hic! Iure deserunt soluta, facere quae
          repudiandae doloremque unde consequuntur accusamus alias voluptatem
          voluptatibus beatae perspiciatis culpa necessitatibus velit quisquam
          quasi ad sint delectus mollitia. Repellat voluptate, nisi dolore quos
          ex aut sequi adipisci voluptatum laudantium similique repellendus quia
          maiores accusantium tempora eius ab praesentium doloribus ut quo
          dignissimos culpa placeat. Quasi, ut. Placeat temporibus aliquam
          mollitia ipsum optio doloribus iste laudantium harum ipsa, ab aperiam
          voluptates voluptatem, cupiditate totam soluta alias sunt quas
          praesentium ratione assumenda. Ea non deleniti corporis ex temporibus
          ut assumenda atque harum similique provident quos, dolor quisquam
          dicta consequuntur iste corrupti quis ullam culpa quod! Illo
          inventore, unde obcaecati voluptatibus quis quam alias nesciunt beatae
          cumque cum iste doloremque, quaerat consequatur, facilis incidunt quas
          at animi? In voluptate fuga obcaecati. Voluptates voluptatem fugit
          quisquam commodi amet incidunt, inventore eligendi velit perspiciatis
          cum corporis officiis omnis at deserunt a quod, numquam odit dolore,
          nisi magnam modi explicabo voluptatum? Dolorum ipsa natus placeat
          facere magni vel suscipit deleniti, accusantium explicabo optio?
          Provident natus, rerum magnam obcaecati, earum illum ab suscipit totam
          aut temporibus consequatur fugit corporis quod. Laboriosam aliquid
          sapiente fugit amet repellat, ducimus quod excepturi. Molestiae odio
          animi earum delectus, optio assumenda architecto illum iusto tempora
          harum eius non quae eveniet consectetur. Iusto maxime at maiores quia
          dolor provident ut? Non magnam rerum amet aliquam magni quo aperiam,
          debitis natus vel incidunt dicta accusantium unde libero quibusdam cum
          officia? Quos dolores repellendus error esse perspiciatis, nulla
          mollitia accusantium neque natus delectus ex, consequatur quasi
          inventore corrupti quisquam nobis quas vel aperiam sapiente sit.
          Beatae, dolorum sequi, quibusdam ipsum perspiciatis ipsam quas ad
          debitis nostrum a reprehenderit, fugit ab corrupti esse. Commodi nobis
          maiores soluta suscipit assumenda perspiciatis odio sit praesentium
          tempora provident expedita, natus explicabo eaque vel similique nihil
          repellat unde consectetur dolorem optio consequatur eum. Veniam
          officiis ducimus, consectetur magni nulla at facere similique, error
          illo vel, maiores excepturi laborum unde nesciunt consequuntur alias
          asperiores earum aperiam quaerat eum. Dolore excepturi debitis,
          laudantium placeat quisquam provident fugiat quo voluptatibus porro
          optio minus impedit labore quibusdam aspernatur in aperiam tempora
          nesciunt officia, praesentium reprehenderit suscipit corporis
          corrupti. Laboriosam veniam repudiandae numquam non iusto obcaecati
          aspernatur provident voluptates doloremque, dolore aperiam voluptatem!
          Quibusdam esse similique ipsam soluta a beatae dolor velit eum eius
          illum reprehenderit earum odio eos omnis, aliquam consequuntur culpa
          sit repellat. Similique laborum libero velit iure. Dicta qui nesciunt
          dignissimos molestias unde. Facilis magni commodi tempora porro
          veritatis error optio alias quos perspiciatis tempore labore delectus
          rerum ipsa, ad aut ducimus pariatur minima aliquid earum?
        </p>{" "}
      </Footer>
    </Wrapper>
  );
};

export default About;
