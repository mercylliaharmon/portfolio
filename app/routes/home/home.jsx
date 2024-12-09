
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import femaAlert from '~/assets/projects/fema-alert.jpg';
import africaOne from '~/assets/projects/onestop-1.jpeg';
import africaTwo from '~/assets/projects/onestop-2.jpeg';
import surrogacyOne from '~/assets/projects/surrogacy-1.jpeg';
import surrogacyTwo from '~/assets/projects/surrogacy-2.jpeg';
import sageOne from '~/assets/projects/sage-1.png';
import sageTwo from '~/assets/projects/sage-2.png';
import managingOne from '~/assets/projects/managingportfolios-1.png';
import managingTwo from '~/assets/projects/managingportfolios-2.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Sr. WordPress Engineer',
    description: `Design portfolio of ${config.name} — a web engineer working on frontend & backend with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
        <ProjectSummary
            id="project-1"
            sectionRef={projectOne}
            visible={visibleSections.includes(projectOne.current)}
            index={5}
            title="Surrogacy Together: Building Families through Connection"
            description="I collaborated on the development of the Surrogacy Together website, a platform dedicated to helping families navigate the surrogacy process. The web connects intended parents, surrogates, and experts, providing a community and resources to support their journeys."
            buttonText="View project"
            buttonLink="https://thebiggestask.com/"
            model={{
                type: 'phone',
                alt: 'Surrogacy Together: Building Families through Connection',
                textures: [
                    {
                        srcSet: `${surrogacyOne} 375w, ${surrogacyOne} 750w`,
                        placeholder: gamestackTexturePlaceholder,
                    },
                    {
                        srcSet: `${surrogacyTwo} 375w, ${surrogacyTwo} 750w`,
                        placeholder: gamestackTexture2Placeholder,
                    },
                ],
            }}
        />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={1}
        title="SAGE: Protecting Your Home & Family"
        description="As a developer, I enhanced the pest control website by creating a responsive design, integrating dynamic features for service exploration, and optimizing performance for seamless user experience. I implemented SEO strategies to improve visibility and secure contact forms for user safety, delivering a functional, user-friendly platform for tailored pest control solutions."
        buttonText="View project"
        buttonLink="https://sage.mystagingwebsite.com/"
        model={{
          type: 'phone',
          alt: 'SAGE: Protecting Your Home & Family',
          textures: [
              {
                  srcSet: `${sageOne} 375w, ${sageOne} 750w`,
                  placeholder: gamestackTexturePlaceholder,
              },
              {
                  srcSet: `${sageTwo} 375w, ${sageTwo} 750w`,
                  placeholder: gamestackTexture2Placeholder,
              },
          ],
        }}
      />
        <ProjectSummary
            id="project-3"
            sectionRef={projectThree}
            visible={visibleSections.includes(projectThree.current)}
            index={7}
            title="FamilyRubies: Your Gateway to African Products and Services"
            description="I contributed to the development of AfricanOneStop, a web designed to connect users with a wide range of African products, services, and businesses. The web offers an easy-to-use interface and a seamless shopping experience for users across the continent and beyond. It's also available on both Android and iOS, it brings African commerce to the global stage."
            buttonText="View project"
            buttonLink="https://www.familyrubies.com/"
            model={{
                type: 'phone',
                alt: 'FamilyRubies: Your Gateway to African Products and Services',
                textures: [
                    {
                        srcSet: `${africaOne} 375w, ${africaOne} 750w`,
                        placeholder: gamestackTexturePlaceholder,
                    },
                    {
                        srcSet: `${africaTwo} 375w, ${africaTwo} 750w`,
                        placeholder: gamestackTexture2Placeholder,
                    },
                ],
            }}
        />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={2}
        title="Managing Portfolios"
        description="As a contributor, I developed and optimized the platform's structure, ensuring a seamless user experience. I implemented responsive design, integrated interactive elements, and enhanced performance to deliver a reliable, user-friendly resource for project portfolio management excellence."
        buttonText="View project"
        buttonLink="https://managingportfolios.com/"
        model={{
          type: 'phone',
          alt: 'Managing Portfolios',
          textures: [
            {
              srcSet: `${managingOne} 375w, ${managingOne} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${managingTwo} 375w, ${managingTwo} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
