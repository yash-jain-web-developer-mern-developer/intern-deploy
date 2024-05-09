import styles from "./Documentation.module.css";

const Documentation = () => {
  return (
   
   <div className={styles.documentation}>
      <div className={styles.primaryCtaWrapper}>
        <h1 className={styles.primaryCta}>Primary CTA</h1>
      </div>
      <div className={styles.buttonParentParent}>
        <div className={styles.buttonParent}>
          <div className={styles.defaultState}>Default State</div>
        </div>
        <div className={styles.button}>
          <div className={styles.meetYourCandidates}>Meet your Candidates</div>
          <div className={styles.frameWrapper}>
            <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.carouselParent}>
        <div className={styles.frameParent}>
          <div className={styles.hoverStateWrapper}>
            <div className={styles.hoverState}>Hover State</div>
          </div>
          <div className={styles.button1}>
            <div className={styles.meetYourCandidates1}>
              Meet your Candidates
            </div>
            <div className={styles.frameContainer}>
              <img className={styles.frameIcon1} alt="" src="/frame@2x.png" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.documentationInner}>
        <div className={styles.secondaryCtaParent}>
          <h1 className={styles.secondaryCta}>Secondary CTA</h1>
          <div className={styles.carouselDotWrapper}>
            <div className={styles.carouselDot}>
              <div className={styles.defaultStateWrapper}>
                <div className={styles.defaultState1}>Default State</div>
              </div>
              <button className={styles.button2}>
                <div className={styles.getProjects}>Get projects</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondaryCTABackground}>
        <div className={styles.hoverStateBackgroundParent}>
          <div className={styles.hoverStateBackground}>
            <div className={styles.hoverState1}>Hover State</div>
          </div>
          <button className={styles.button3}>
            <div className={styles.getProjects1}>Get projects</div>
          </button>
        </div>
      </div>
      <div className={styles.verticalCarouselWrapper}>
        <div className={styles.verticalCarousel}>
          <h1 className={styles.carousel}>Carousel</h1>
          <div className={styles.horizontalCarousel}>
            <div className={styles.singleCarousel}>
              <div className={styles.normalState}>Normal State</div>
              <div className={styles.singleCarouselInner}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.documentationChild}>
        <div className={styles.hoverStateParent}>
          <div className={styles.hoverState2}>Hover State</div>
          <div className={styles.frameDiv}>
            <div className={styles.ellipseGroup}>
              <div className={styles.ellipseDiv} />
              <div className={styles.frameChild1} />
              <div className={styles.frameChild2} />
            </div>
          </div>
        </div>
      </div>
    </div>
   
    
  );
};

export default Documentation;
