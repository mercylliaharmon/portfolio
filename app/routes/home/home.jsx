
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import wildtrackHome from '~/assets/projects/wildtrack-home.png';
import wildtrackObservation from '~/assets/projects/wildtrack-observation.png';
import femaAlert from '~/assets/projects/fema-alert.jpg';
import femaList from '~/assets/projects/fema-list.jpg';
import bartesianHome from '~/assets/projects/bartesian-home.jpg';
import bartesianMenu from '~/assets/projects/bartesian-menu.jpg';
import africaOne from '~/assets/projects/onestop-1.jpeg';
import africaTwo from '~/assets/projects/onestop-2.jpeg';
import rodeoOne from '~/assets/projects/rodeo-1.jpg';
import rodeoTwo from '~/assets/projects/rodeo-2.jpg';
import adminOne from '~/assets/projects/adminsports-1.jpg';
import adminTwo from '~/assets/projects/adminsports-2.jpg';
import surrogacyOne from '~/assets/projects/surrogacy-1.jpeg';
import surrogacyTwo from '~/assets/projects/surrogacy-2.jpeg';
import crossOverOne from '~/assets/projects/crossover-1.jpg';
import crossOverTwo from '~/assets/projects/crossover-2.jpg';
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
    title: 'App Engineer + Solution Architect',
    description: `Design portfolio of ${config.name} — a mobile app engineer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
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
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const projectEight = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, details];

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
        index={1}
        title="FEMA: Disaster Preparedness and Recovery"
        description="Contributed to the development of FEMA's official mobile app, which helps users prepare for, respond to, and recover from disasters. The app provides real-time weather alerts, emergency tips, and access to disaster recovery centers."
        buttonText="View project"
        buttonLink="https://www.fema.gov/"
        model={{
          type: 'phone',
          alt: 'FEMA: Disaster Preparedness and Recovery',
          textures: [
              {
                  srcSet: `${femaAlert} 375w, ${femaAlert} 750w`,
                  placeholder: gamestackTexturePlaceholder,
              },
              {
                  srcSet: `${femaList} 375w, ${femaList} 750w`,
                  placeholder: gamestackTexture2Placeholder,
              },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Bartesian: The World’s Top-Selling Cocktail System"
        description="Developed the mobile companion app for Bartesian, the award-winning cocktail maker that allows users to create premium cocktails at home. The app enhances the user experience by providing recipe suggestions, smart device connectivity, and automated cocktail customization based on user preferences."
        buttonText="View project"
        buttonLink="https://bartesian.com/ "
        model={{
          type: 'phone',
          alt: 'Bartesian: The World’s Top-Selling Cocktail System',
          textures: [
            {
              srcSet: `${bartesianHome} 375w, ${bartesianHome} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${bartesianMenu} 375w, ${bartesianMenu} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="WildTrackAI: Protecting Endangered Species"
        description="Engineered the mobile platform for WildTrackAI, enabling real-time tracking and monitoring of endangered species through footprint analysis. The app leverages AI and advanced analytics to help conservationists protect wildlife across the globe"
        buttonText="View project"
        buttonLink="https://www.wildtrack.org/"
        model={{
          type: 'phone',
          alt: 'WildTrackAI: Protecting Endangered Species',
          textures: [
              {
                  srcSet: `${wildtrackHome} 375w, ${wildtrackHome} 750w`,
                  placeholder: gamestackTexturePlaceholder,
              },
              {
                  srcSet: `${wildtrackObservation} 375w, ${wildtrackObservation} 750w`,
                  placeholder: gamestackTexture2Placeholder,
              },
          ],
        }}
      />
        <ProjectSummary
            id="project-4"
            sectionRef={projectFour}
            visible={visibleSections.includes(projectFour.current)}
            index={4}
            title="Crossover Health: Bridging Healthcare and Technology"
            description="I worked on the mobile application for Crossover Health, which provides a comprehensive platform that integrates health services, virtual care, and in-person care experiences. Available on both Android and iOS, the app enhances patient engagement and facilitates seamless communication with healthcare professionals."
            buttonText="View project"
            buttonLink="https://crossoverhealth.com/"
            model={{
                type: 'phone',
                alt: 'Crossover Health: Bridging Healthcare and Technology',
                textures: [
                    {
                        srcSet: `${crossOverOne} 375w, ${crossOverOne} 750w`,
                        placeholder: gamestackTexturePlaceholder,
                    },
                    {
                        srcSet: `${crossOverTwo} 375w, ${crossOverTwo} 750w`,
                        placeholder: gamestackTexture2Placeholder,
                    },
                ],
            }}
        />
        <ProjectSummary
            id="project-5"
            sectionRef={projectFive}
            visible={visibleSections.includes(projectFive.current)}
            index={5}
            title="RodeoResults: The Ultimate Rodeo Tracking App"
            description="RodeoResults is a specialized app designed for rodeo athletes, fans, and event organizers to track live rodeo results, standings, and event schedules. I contributed to enhancing the app's user interface and optimizing its performance across both Android and iOS platforms."
            buttonText="View project"
            buttonLink="https://www.rodeoresults.com/"
            model={{
                type: 'phone',
                alt: 'RodeoResults: The Ultimate Rodeo Tracking App',
                textures: [
                    {
                        srcSet: `${rodeoOne} 375w, ${rodeoOne} 750w`,
                        placeholder: gamestackTexturePlaceholder,
                    },
                    {
                        srcSet: `${rodeoTwo} 375w, ${rodeoTwo} 750w`,
                        placeholder: gamestackTexture2Placeholder,
                    },
                ],
            }}
        />
        <ProjectSummary
            id="project-5"
            sectionRef={projectSix}
            visible={visibleSections.includes(projectSix.current)}
            index={5}
            title="Surrogacy Together: Building Families through Connection"
            description="I collaborated on the development of the Surrogacy Together app, a platform dedicated to helping families navigate the surrogacy process. The app connects intended parents, surrogates, and experts, providing a community and resources to support their journeys."
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
            id="project-6"
            sectionRef={projectSeven}
            visible={visibleSections.includes(projectSeven.current)}
            index={6}
            title="AdminSports: Simplifying Sports League Management"
            description="AdminSports is a comprehensive solution for managing sports leagues, from registrations to scheduling and scorekeeping. I was involved in building and optimizing the mobile app to deliver a seamless experience for administrators, coaches, and players."
            buttonText="View project"
            buttonLink="https://adminsports.com/"
            model={{
                type: 'phone',
                alt: 'AdminSports: Simplifying Sports League Management',
                textures: [
                    {
                        srcSet: `${adminOne} 375w, ${adminOne} 750w`,
                        placeholder: gamestackTexturePlaceholder,
                    },
                    {
                        srcSet: `${adminTwo} 375w, ${adminTwo} 750w`,
                        placeholder: gamestackTexture2Placeholder,
                    },
                ],
            }}
        />
        <ProjectSummary
            id="project-7"
            sectionRef={projectEight}
            visible={visibleSections.includes(projectEight.current)}
            index={7}
            title="AfricanOneStop: Your Gateway to African Products and Services"
            description="I contributed to the development of AfricanOneStop, a mobile platform designed to connect users with a wide range of African products, services, and businesses. The app offers an easy-to-use interface and a seamless shopping experience for users across the continent and beyond. Available on both Android and iOS, it brings African commerce to the global stage."
            buttonText="View project"
            buttonLink="https://africaonestop.com/"
            model={{
                type: 'phone',
                alt: 'AfricanOneStop: Your Gateway to African Products and Services',
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
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
