import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
      <Text>
          I'm Mercy, a dedicated <strong>Solution Architect and Mobile App Engineer</strong> with expertise in <strong>React Native</strong> and <strong>Flutter</strong>. Over the past three years, I've delivered 10+ successful apps that have generated over $500K in revenue.
      </Text>
      <Text style={{marginTop: 20, marginBottom: 20}}>
          I focus on creating user-centric, scalable applications that blend innovation with performance, ensuring each solution meets real business needs.
      </Text>
      <Text as="h2">Highlights:</Text>
      <ul>
          <li><Text><strong>Cross-Platform Mastery</strong>: Expert in delivering seamless experiences on both iOS and Android.</Text></li>
          <li><Text><strong>Revenue Impact</strong>: Proven track record of generating significant revenue through effective app solutions.</Text></li>
          <li><Text><strong>Client Focused</strong>: I prioritize understanding client needs to craft solutions that drive success.</Text></li>
      </ul>
      <Text style={{marginTop: 20, marginBottom: 20}}>
          I'm passionate about pushing the boundaries of mobile development and am excited for the next challenge!
      </Text>
    {/*<Text className={styles.description} data-visible={visible} size="l" as="p">*/}
    {/*    I'm Mercy, a passionate Solution Architect and Mobile App Engineer with over three years of experience specializing in React Native and Flutter. I’ve successfully completed more than 10 mobile applications, generating over $500K in revenue.*/}

    {/*    My expertise lies in crafting scalable and high-performance apps that prioritize user experience and robust functionality. I thrive on bridging the gap between business goals and technical execution, designing innovative solutions that drive both engagement and revenue.*/}
    {/*   My projects include UX design, UI*/}
    {/*  animations, and icon illustration. Being comfortable with code allows me to rapidly*/}
    {/*  prototype and validate experiences. If you’re interested in the tools and software I*/}
    {/*  use check out my <Link href="/uses">uses page</Link>.*/}
    {/*</Text>*/}
    {/*<Text className={styles.description} data-visible={visible} size="l" as="p">*/}
    {/*  In my spare time I like to practice Brazilian Jiu Jitsu, play video games, and{' '}*/}
    {/*  <Link href="/projects/volkihar-knight">make mods</Link>. I’m always down for hearing*/}
    {/*  about new projects, so feel free to drop me a line.*/}
    {/*</Text>*/}
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
