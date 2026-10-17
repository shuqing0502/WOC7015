# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> TC21: About opens new tab
- Location: tests\pom.spec.js:92:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: browserContext.waitForEvent: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - dialog "Cookie Consent Banner" [ref=f1e2]:
    - button "Close this consent banner" [active] [ref=f1e3] [cursor=pointer]
    - generic [ref=f1e5]:
      - generic [ref=f1e6]: "This website utilizes technologies such as cookies to enable essential site functionality, as well as for analytics, personalization, and targeted advertising. To learn more, view the following link:"
      - link "Privacy Policy" [ref=f1e7] [cursor=pointer]:
        - /url: https://saucelabs.com/doc/privacy-policy
    - button "Manage Preferences" [ref=f1e9] [cursor=pointer]
  - generic [ref=f1e10]:
    - generic [ref=f1e11]:
      - generic [ref=f1e12]:
        - generic [ref=f1e13]: Turn intent into test cases in minutes with Sauce AI for Authoring.
        - link "Try Sauce AI" [ref=f1e14] [cursor=pointer]:
          - /url: https://saucelabs.com/sign-up
      - generic [ref=f1e16] [cursor=pointer]: X
    - navigation [ref=f1e20]:
      - generic [ref=f1e22]:
        - link [ref=f1e23] [cursor=pointer]:
          - /url: /
        - generic [ref=f1e28]:
          - generic [ref=f1e31]:
            - button "Why SauceLabs" [ref=f1e34] [cursor=pointer]
            - button "Products" [ref=f1e40] [cursor=pointer]
            - button "Solutions" [ref=f1e46] [cursor=pointer]
            - button "Developers" [ref=f1e52] [cursor=pointer]
            - button "Resources" [ref=f1e58] [cursor=pointer]
            - link "Pricing" [ref=f1e63] [cursor=pointer]:
              - /url: https://saucelabs.com/pricing
          - generic [ref=f1e66]:
            - link "Login" [ref=f1e68] [cursor=pointer]:
              - /url: https://accounts.saucelabs.com/
            - link "Book a Demo" [ref=f1e70] [cursor=pointer]:
              - /url: /request-demo
  - generic [ref=f1e73]:
    - generic [ref=f1e74]:
      - paragraph [ref=f1e75]: From BUSINESS Intent to Production Confidence
      - heading "Verify AI-generated code at the pace it's written." [level=1] [ref=f1e76]
    - generic [ref=f1e77]:
      - paragraph [ref=f1e78]: AURA is the only closed-loop agentic AI platform for enterprise test automation and release assurance. It writes, runs, analyzes and heals your tests. 90% fewer production incidents. 47% faster releases. Built by the company behind Selenium and Appium.
      - generic [ref=f1e79]:
        - link "Start Free" [ref=f1e81] [cursor=pointer]:
          - /url: https://saucelabs.com/sign-up
        - link "Book a Demo" [ref=f1e84] [cursor=pointer]:
          - /url: /request-demo
  - generic [ref=f1e95]:
    - paragraph [ref=f1e97]: "SAUCE LABS: THE UNIFIED PLATFORM ENTERPRISES TRUST"
    - generic [ref=f1e99]:
      - img "Brand Logo" [ref=f1e102]
      - img "Brand Logo" [ref=f1e105]
      - img "Brand Logo" [ref=f1e108]
      - img "Brand Logo" [ref=f1e111]
      - img "Brand Logo" [ref=f1e115]
      - img "Brand Logo" [ref=f1e118]
      - img "Brand Logo" [ref=f1e121]
  - generic [ref=f1e193]:
    - img "Pixelated Blocks" [ref=f1e194]
    - generic [ref=f1e196] [cursor=pointer]
  - generic [ref=f1e198]:
    - heading "Strategic Outcomes" [level=2] [ref=f1e199]
    - generic [ref=f1e200]:
      - generic [ref=f1e201]:
        - generic:
          - img "Pixelated Blocks"
        - generic [ref=f1e202]:
          - generic [ref=f1e203]:
            - generic [ref=f1e204]:
              - paragraph [ref=f1e207]: QUALITY
              - heading "Verify every release against business intent" [level=3] [ref=f1e208]
            - paragraph [ref=f1e209]: Agentic release verification against business intent that catches what slips past human review of AI-generated code.
          - generic [ref=f1e210]:
            - generic [ref=f1e211]:
              - paragraph [ref=f1e212]: "90"
              - paragraph [ref=f1e213]: "%"
            - paragraph [ref=f1e214]: reduction in production incidents
          - generic [ref=f1e215]:
            - paragraph [ref=f1e218]: 75% decrease in critical crashes
            - paragraph [ref=f1e221]: 4x fewer critical issues in production
            - paragraph [ref=f1e224]: 75% lower error resolution costs
      - generic [ref=f1e225]:
        - generic:
          - img "Pixelated Blocks"
        - generic [ref=f1e226]:
          - generic [ref=f1e227]:
            - generic [ref=f1e228]:
              - paragraph [ref=f1e231]: SPEED
              - heading "Validate code reliability at the speed of AI" [level=3] [ref=f1e232]
            - paragraph [ref=f1e233]: AI agents that automate end-to-end test authoring, execution, and analysis, ensuring release validation at the speed code is generated.
          - generic [ref=f1e234]:
            - generic [ref=f1e235]:
              - paragraph [ref=f1e236]: "47"
              - paragraph [ref=f1e237]: "% +"
            - paragraph [ref=f1e238]: faster release cycles to market
          - generic [ref=f1e239]:
            - paragraph [ref=f1e242]: 90%+ automated coverage
            - paragraph [ref=f1e245]: 75% reduction in test execution time
            - paragraph [ref=f1e248]: 90%+ faster root-cause analysis
      - generic [ref=f1e249]:
        - generic:
          - img "Pixelated Blocks"
        - generic [ref=f1e250]:
          - generic [ref=f1e251]:
            - generic [ref=f1e252]:
              - paragraph [ref=f1e255]: EFFICIENCY
              - heading "Keep humans at the core of quality assurance" [level=3] [ref=f1e256]
            - paragraph [ref=f1e257]: "Code verification capabilities that empower developers and testers in native workflows: AI coding tools, IDEs, and CI/CD pipelines."
          - generic [ref=f1e258]:
            - generic [ref=f1e259]:
              - paragraph [ref=f1e260]: "38"
              - paragraph [ref=f1e261]: "% +"
            - paragraph [ref=f1e262]: engineering capacity reclaimed
          - generic [ref=f1e263]:
            - paragraph [ref=f1e266]: 80%+ faster test authoring
            - paragraph [ref=f1e269]: Non-flaky tests across 10,000+ device and OS combinations
            - paragraph [ref=f1e272]: Works with every major framework
  - generic [ref=f1e274]:
    - heading "AURA delivers outcomes at every level of your engineering organization." [level=1] [ref=f1e276]
    - generic [ref=f1e277]:
      - generic [ref=f1e283]:
        - generic [ref=f1e284]:
          - img "Pixelated Blocks" [ref=f1e287]
          - paragraph [ref=f1e288]: For the C-suite
        - generic [ref=f1e289]:
          - paragraph [ref=f1e290]: Business outcomes that change the board conversation.
          - generic [ref=f1e291]:
            - paragraph [ref=f1e292]: OUTCOMES
            - list [ref=f1e295]:
              - listitem [ref=f1e296]:
                - strong [ref=f1e297]: 90%
                - text: reduction in production incidents
              - listitem [ref=f1e298]:
                - strong [ref=f1e299]: 47%+
                - text: faster release cycles to market
              - listitem [ref=f1e300]:
                - strong [ref=f1e301]: 38%+
                - text: engineering capacity reclaimed
        - link "see business outcomes" [ref=f1e303] [cursor=pointer]:
          - /url: /personas/aura-for-ctos
      - generic [ref=f1e313]:
        - generic [ref=f1e314]:
          - img "Pixelated Blocks" [ref=f1e317]
          - paragraph [ref=f1e318]: For directors of engineering and quality
        - generic [ref=f1e319]:
          - paragraph [ref=f1e320]: Strategic outcomes you can stake the roadmap on.
          - generic [ref=f1e321]:
            - paragraph [ref=f1e322]: OUTCOMES
            - list [ref=f1e325]:
              - listitem [ref=f1e326]:
                - strong [ref=f1e327]: Every release verified
                - text: against business intent‍
              - listitem [ref=f1e328]:
                - strong [ref=f1e329]: ~100%
                - text: of test authoring, execution, and analysis automated‍
              - listitem [ref=f1e330]:
                - strong [ref=f1e331]: Testing embedded
                - text: in the developer tool stack
        - link "see strategic outcomes" [ref=f1e333] [cursor=pointer]:
          - /url: /personas/aura-for-directors-of-engineering
      - generic [ref=f1e343]:
        - generic [ref=f1e344]:
          - img "Pixelated Blocks" [ref=f1e347]
          - paragraph [ref=f1e348]: For developers and QA engineers
        - generic [ref=f1e349]:
          - paragraph [ref=f1e350]: Operational outcomes you'll feel in week one.
          - generic [ref=f1e351]:
            - paragraph [ref=f1e352]: OUTCOMES
            - list [ref=f1e355]:
              - listitem [ref=f1e356]:
                - paragraph [ref=f1e357]:
                  - strong [ref=f1e358]: 80%+
                  - text: less time on test authoring
              - listitem [ref=f1e359]:
                - paragraph [ref=f1e360]:
                  - strong [ref=f1e361]: Tests that survive
                  - text: UI changes
              - listitem [ref=f1e362]:
                - paragraph [ref=f1e363]:
                  - strong [ref=f1e364]: Root cause in minutes,
                  - text: not hours
        - link "see operational outcomes" [ref=f1e366] [cursor=pointer]:
          - /url: /personas/aura-for-developers
  - generic [ref=f1e372]:
    - generic [ref=f1e373]:
      - paragraph [ref=f1e374]: AURA USE CASES
      - heading "Operational Outcomes" [level=2] [ref=f1e375]
    - generic [ref=f1e376]:
      - generic [ref=f1e377]:
        - generic [ref=f1e378]:
          - img "Pixelated Blocks"
          - generic [ref=f1e379]:
            - generic [ref=f1e380]:
              - paragraph [ref=f1e382]: "1"
              - heading "Intent-based test case generation" [level=3] [ref=f1e383]
            - paragraph [ref=f1e384]: "Describe tests in natural language, get executable tests in your framework of choice: Selenium, Cypress, Appium, and more. Authored right in your IDE‍"
          - generic [ref=f1e385]:
            - paragraph [ref=f1e386]: OUTCOME
            - paragraph [ref=f1e388]:
              - strong [ref=f1e389]: 80%+
              - text: test authoring time reduction
          - link "learn more" [ref=f1e391] [cursor=pointer]:
            - /url: /use-case/intent-based-test-generation
        - generic [ref=f1e393]:
          - img "Pixelated Blocks"
          - generic [ref=f1e394]:
            - generic [ref=f1e395]:
              - paragraph [ref=f1e397]: "2"
              - heading "Resilient test infrastructure" [level=3] [ref=f1e398]
            - paragraph [ref=f1e399]: Tests built on application intent survive UI changes. Device and framework agnostic. When something fails, you get the insight to fix it.‍
          - generic [ref=f1e400]:
            - paragraph [ref=f1e401]: OUTCOME
            - paragraph [ref=f1e403]:
              - strong [ref=f1e404]: 75%
              - text: reduced breaking changes
          - link "learn more" [ref=f1e406] [cursor=pointer]:
            - /url: /use-case/resilient-test-infrastructure
        - generic [ref=f1e408]:
          - img "Pixelated Blocks"
          - generic [ref=f1e409]:
            - generic [ref=f1e410]:
              - paragraph [ref=f1e412]: "3"
              - heading "Real-world device coverage" [level=3] [ref=f1e413]
            - paragraph [ref=f1e414]: 10,000+ real devices, 3,000+ OS/browser combinations. Programmatic device control for agentic testing and custom workflows on real device infrastructure.‍
          - generic [ref=f1e415]:
            - paragraph [ref=f1e416]: OUTCOME
            - paragraph [ref=f1e418]:
              - strong [ref=f1e419]: 90%+
              - text: increase in test coverage
          - link "learn more" [ref=f1e421] [cursor=pointer]:
            - /url: /use-case/real-world-device-coverage
      - generic [ref=f1e423]:
        - generic [ref=f1e424]:
          - img "Pixelated Blocks"
          - generic [ref=f1e425]:
            - generic [ref=f1e426]:
              - paragraph [ref=f1e428]: "4"
              - heading "Automated test case execution" [level=3] [ref=f1e429]
            - paragraph [ref=f1e430]: Thousands of concurrent sessions on secure device cloud infrastructure hosted by Sauce Labs. Nothing for you to provision, manage, or maintain. ‍
          - generic [ref=f1e431]:
            - paragraph [ref=f1e432]: OUTCOME
            - paragraph [ref=f1e434]:
              - strong [ref=f1e435]: 75%
              - text: test execution time savings
          - link "learn more" [ref=f1e437] [cursor=pointer]:
            - /url: /use-case/automated-test-execution
        - generic [ref=f1e439]:
          - img "Pixelated Blocks"
          - generic [ref=f1e440]:
            - generic [ref=f1e441]:
              - paragraph [ref=f1e443]: "5"
              - heading "AI-powered test failure analysis" [level=3] [ref=f1e444]
            - paragraph [ref=f1e445]: Turn raw test results into answers. AI-generated insights pinpoint the failure and root cause across runs, with recommendations on remediation in your workflow.
          - generic [ref=f1e446]:
            - paragraph [ref=f1e447]: OUTCOME
            - paragraph [ref=f1e449]:
              - strong [ref=f1e450]: 90%+
              - text: faster root-cause analysis
          - link "learn more" [ref=f1e452] [cursor=pointer]:
            - /url: /use-case/ai-powered-test-failure-analysis
        - generic [ref=f1e454]:
          - img "Pixelated Blocks"
          - generic [ref=f1e455]:
            - generic [ref=f1e456]:
              - paragraph [ref=f1e458]: "6"
              - heading "Integrated beta testing" [level=3] [ref=f1e459]
            - paragraph [ref=f1e460]: Secure app distribution at enterprise scale with SSO and role-based access. Get real user validation pre-release, and reproduce reported bugs on the exact real device they hit it on.‍
          - generic [ref=f1e461]:
            - paragraph [ref=f1e462]: OUTCOME
            - paragraph [ref=f1e464]:
              - strong [ref=f1e465]: 50%
              - text: shorter beta cycles
          - link "learn more" [ref=f1e467] [cursor=pointer]:
            - /url: /use-case/integrated-beta-testing
      - generic [ref=f1e469]:
        - generic [ref=f1e470]:
          - img "Pixelated Blocks"
          - generic [ref=f1e471]:
            - generic [ref=f1e472]:
              - paragraph [ref=f1e474]: "7"
              - heading "Production error analysis" [level=3] [ref=f1e475]
            - paragraph [ref=f1e476]: Faster root-cause analysis with recommendations. Real-time alerts, structured error data, and deduplication surface the errors that matter.‍
          - generic [ref=f1e477]:
            - paragraph [ref=f1e478]: OUTCOME
            - paragraph [ref=f1e480]:
              - strong [ref=f1e481]: 75%+
              - text: reduction in critical crashes
          - link "learn more" [ref=f1e483] [cursor=pointer]:
            - /url: /use-case/production-error-analysis
        - generic [ref=f1e485]:
          - generic [ref=f1e487]:
            - img "Sauce Labs Logo Icon"
          - heading "Why Sauce" [level=3] [ref=f1e488]
          - generic [ref=f1e489]:
            - paragraph [ref=f1e490]:
              - strong [ref=f1e491]: Industry's largest dataset of 8.7B+ enterprise test executions.Built by founders of Selenium and Appium. ISO 42001 certified for responsible AI, alongside ISO/IEC 27001 and ISO/IEC 27701 certifications.
            - link "learn more" [ref=f1e493] [cursor=pointer]:
              - /url: /why-sauce
          - img "Pixelated Blocks"
  - generic [ref=f1e497]:
    - generic [ref=f1e498]:
      - paragraph [ref=f1e499]: Scaled to 50,000 automated tests per day. Accelerated deployment from twice a month to multiple times a day.
      - link "READ THE STORY" [ref=f1e500] [cursor=pointer]:
        - /url: https://saucelabs.com/resources/case-studies/walmart-embraces-test-automation-and-open-source-to-increase-coverage-and-deploy-more-often
    - generic [ref=f1e503]:
      - paragraph [ref=f1e504]: Expanded test volume 250x to 25,000+ tests, achieving 100x increase in UI coverage. Cut execution time — days to hours.
      - link "READ THE STORY" [ref=f1e505] [cursor=pointer]:
        - /url: https://saucelabs.com/resources/case-studies/menlo-security-deploys-global-saas-browser-with-sauce-labs
    - generic [ref=f1e508]:
      - paragraph [ref=f1e509]: Achieved 60%+ faster release cycles, increased platform coverage by 70%, and accelerated user adoption.
      - link "READ THE STORY" [ref=f1e510] [cursor=pointer]:
        - /url: https://saucelabs.com/resources/case-studies/how-keller-williams-accelerated-their-release-cycles-with-sauce-labs
    - generic [aria-hidden] [ref=f1e513]:
      - paragraph [ref=f1e514]: Scaled to 50,000 automated tests per day. Accelerated deployment from twice a month to multiple times a day.
      - link [ref=f1e515] [cursor=pointer]:
        - /url: https://saucelabs.com/resources/case-studies/walmart-embraces-test-automation-and-open-source-to-increase-coverage-and-deploy-more-often
        - generic [ref=f1e516]: READ THE STORY
    - generic [aria-hidden] [ref=f1e518]:
      - paragraph [ref=f1e519]: Expanded test volume 250x to 25,000+ tests, achieving 100x increase in UI coverage. Cut execution time — days to hours.
      - link [ref=f1e520] [cursor=pointer]:
        - /url: https://saucelabs.com/resources/case-studies/menlo-security-deploys-global-saas-browser-with-sauce-labs
        - generic [ref=f1e521]: READ THE STORY
    - generic [aria-hidden] [ref=f1e523]:
      - paragraph [ref=f1e524]: Achieved 60%+ faster release cycles, increased platform coverage by 70%, and accelerated user adoption.
      - link [ref=f1e525] [cursor=pointer]:
        - /url: https://saucelabs.com/resources/case-studies/how-keller-williams-accelerated-their-release-cycles-with-sauce-labs
        - generic [ref=f1e526]: READ THE STORY
    - generic [aria-hidden] [ref=f1e528]:
      - paragraph [ref=f1e529]: Scaled to 50,000 automated tests per day. Accelerated deployment from twice a month to multiple times a day.
      - link [ref=f1e530] [cursor=pointer]:
        - /url: https://saucelabs.com/resources/case-studies/walmart-embraces-test-automation-and-open-source-to-increase-coverage-and-deploy-more-often
        - generic [ref=f1e531]: READ THE STORY
    - generic [aria-hidden] [ref=f1e533]:
      - paragraph [ref=f1e534]: Expanded test volume 250x to 25,000+ tests, achieving 100x increase in UI coverage. Cut execution time — days to hours.
      - link [ref=f1e535] [cursor=pointer]:
        - /url: https://saucelabs.com/resources/case-studies/menlo-security-deploys-global-saas-browser-with-sauce-labs
        - generic [ref=f1e536]: READ THE STORY
    - generic [aria-hidden] [ref=f1e538]:
      - paragraph [ref=f1e539]: Achieved 60%+ faster release cycles, increased platform coverage by 70%, and accelerated user adoption.
      - link [ref=f1e540] [cursor=pointer]:
        - /url: https://saucelabs.com/resources/case-studies/how-keller-williams-accelerated-their-release-cycles-with-sauce-labs
        - generic [ref=f1e541]: READ THE STORY
    - generic [aria-hidden] [ref=f1e543]:
      - paragraph [ref=f1e544]: Scaled to 50,000 automated tests per day. Accelerated deployment from twice a month to multiple times a day.
      - link [ref=f1e545] [cursor=pointer]:
        - /url: https://saucelabs.com/resources/case-studies/walmart-embraces-test-automation-and-open-source-to-increase-coverage-and-deploy-more-often
        - generic [ref=f1e546]: READ THE STORY
    - generic [aria-hidden] [ref=f1e548]:
      - paragraph [ref=f1e549]: Expanded test volume 250x to 25,000+ tests, achieving 100x increase in UI coverage. Cut execution time — days to hours.
      - link [ref=f1e550] [cursor=pointer]:
        - /url: https://saucelabs.com/resources/case-studies/menlo-security-deploys-global-saas-browser-with-sauce-labs
        - generic [ref=f1e551]: READ THE STORY
    - generic [aria-hidden] [ref=f1e553]:
      - paragraph [ref=f1e554]: Achieved 60%+ faster release cycles, increased platform coverage by 70%, and accelerated user adoption.
      - link [ref=f1e555] [cursor=pointer]:
        - /url: https://saucelabs.com/resources/case-studies/how-keller-williams-accelerated-their-release-cycles-with-sauce-labs
        - generic [ref=f1e556]: READ THE STORY
  - generic [ref=f1e558]:
    - generic [ref=f1e559]:
      - generic [ref=f1e560]:
        - paragraph [ref=f1e561]: Value delivered across the SDLC
        - heading "The world's only full-lifecycle release assurance platform" [level=2] [ref=f1e562]
      - paragraph [ref=f1e563]: AURA isn't a point tool. It's a continuous learning system that works across every stage of the lifecycle — requirements, build, test, analyze, deploy, and monitor — with autonomous agents and human oversight built in.
      - link "Book a Demo" [ref=f1e565] [cursor=pointer]:
        - /url: /request-demo
      - generic [ref=f1e573]:
        - img "Pixelated Blocks"
        - generic [ref=f1e574]:
          - generic [ref=f1e575]:
            - heading "The AI-Unified Release Assurance platform" [level=3] [ref=f1e576]
            - generic:
              - img "Platform Image Diagram"
            - generic [ref=f1e577]:
              - generic [ref=f1e578]:
                - paragraph [ref=f1e580]: Framework-Agnostic
                - img "framework agnostic" [ref=f1e583]
              - generic [ref=f1e584]:
                - paragraph [ref=f1e586]: CI/CD-Ready
                - img "Integrated in CI/CD Pipelines" [ref=f1e589]
          - generic [ref=f1e590]:
            - paragraph [ref=f1e591]: EXTENSIBLE
            - generic [ref=f1e593]:
              - paragraph [ref=f1e595]: AI CODING
              - paragraph [ref=f1e598]: IDEs
              - generic [ref=f1e600]:
                - paragraph [ref=f1e601]: APIs
                - paragraph [ref=f1e603]: API
              - paragraph [ref=f1e605]: MCP
    - img "Pixelated Blocks"
  - generic [ref=f1e608]:
    - paragraph [ref=f1e609]: Risk-adjusted estimates for a composite organization representative of interviewed customers.
    - heading "Forrester's commissioned Total Economic Impact™ study of Sauce Labs:" [level=2] [ref=f1e610]
    - generic [ref=f1e611]:
      - generic [ref=f1e612]:
        - generic [ref=f1e613]:
          - paragraph [ref=f1e614]: "217"
          - paragraph [ref=f1e615]: "% ROI"
        - paragraph [ref=f1e617]: over three years
      - generic [ref=f1e618]:
        - generic [ref=f1e620]:
          - paragraph [ref=f1e621]: <
          - paragraph [ref=f1e622]: "6"
          - paragraph [ref=f1e623]: Months
        - paragraph [ref=f1e625]: to payback
      - generic [ref=f1e626]:
        - generic [ref=f1e628]:
          - paragraph [ref=f1e629]: $
          - paragraph [ref=f1e630]: "6.8"
          - paragraph [ref=f1e631]: M
        - paragraph [ref=f1e633]: net present value over three years
    - link "Read the full Forrester TEI" [ref=f1e634] [cursor=pointer]:
      - /url: /resources/report/total-economic-impact-of-sauce-labs
  - generic [ref=f1e637]:
    - generic [ref=f1e638]:
      - generic [ref=f1e639]:
        - paragraph [ref=f1e640]: INTEGRATIONS
        - heading "Framework-agnostic. CI/CD-native. AI-ready." [level=2] [ref=f1e641]
      - paragraph [ref=f1e642]: Connect to the pipelines and frameworks your team already uses. Selenium, Appium, Cypress, Playwright, Espresso, XCUITest, and every major CI/CD platform. Extend it however you like through MCPs, APIs, IDE plugins, and AI coding tool integrations. No rip-and-replace of your current toolchain.
    - link "Learn More" [ref=f1e644] [cursor=pointer]:
      - /url: https://docs.saucelabs.com/basics/integrations-overview/
    - generic [ref=f1e646]:
      - generic [ref=f1e648]:
        - paragraph [ref=f1e649]:
          - generic [ref=f1e650]: IDE & AI tools
        - img "Integration Logo" [ref=f1e652]
        - img "Integration Logo" [ref=f1e654]
        - img "Integration Logo" [ref=f1e656]
        - img "Integration Logo" [ref=f1e658]
        - img "Integration Logo" [ref=f1e660]
      - generic [ref=f1e662]:
        - paragraph [ref=f1e663]: CI/CD pipelines
        - img "Integration Logo" [ref=f1e665]
        - img "Integration Logo" [ref=f1e667]
        - img "Integration Logo" [ref=f1e669]
        - img "Integration Logo" [ref=f1e671]
      - generic [ref=f1e673]:
        - paragraph [ref=f1e674]: Test frameworks
        - img "Integration Logo" [ref=f1e676]
        - img "Integration Logo" [ref=f1e678]
        - img "Integration Logo" [ref=f1e680]
        - img "Integration Logo" [ref=f1e682]
        - img "Integration Logo" [ref=f1e684]
        - img "Integration Logo" [ref=f1e686]
      - generic [ref=f1e688]:
        - paragraph [ref=f1e689]: PLATFORMS
        - img "Integration Logo" [ref=f1e691]
        - img "Integration Logo" [ref=f1e693]
        - paragraph [ref=f1e695]: Web
        - paragraph [ref=f1e697]: Real Devices
        - paragraph [ref=f1e699]: Emulators
        - paragraph [ref=f1e701]: Simulators
  - generic [ref=f1e703]:
    - generic [ref=f1e704]:
      - generic [ref=f1e705]:
        - paragraph [ref=f1e706]: Why Sauce Labs
        - heading "Your business is unique. Your problems are not." [level=2] [ref=f1e707]
      - paragraph [ref=f1e709]: We created the test automation category in the cloud era as the team behind Selenium and Appium. We're redefining it again for the AI era, with the industry's largest pool of cross-platform runtime intelligence.
    - generic [ref=f1e710]:
      - generic [ref=f1e711]:
        - paragraph [ref=f1e713]: data advantage
        - paragraph [ref=f1e714]: 8.7B+
        - paragraph [ref=f1e716]: tests executed. The largest enterprise dataset in the industry.
      - generic [ref=f1e719]:
        - paragraph [ref=f1e721]: DOMAIN EXPERTISE
        - paragraph [ref=f1e722]: 20 yrs
        - paragraph [ref=f1e724]: of domain-specific, test execution data
      - generic [ref=f1e727]:
        - paragraph [ref=f1e729]: PROVEN SECURITY
        - paragraph [ref=f1e730]: 80%+
        - paragraph [ref=f1e732]: of the top 10 F2000 financial institutions are customers
      - generic [ref=f1e733]:
        - paragraph [ref=f1e735]: IT LEADER
        - paragraph [ref=f1e736]: 25%
        - paragraph [ref=f1e738]: of F2000 IT software and services firms are customers
      - generic [ref=f1e741]:
        - paragraph [ref=f1e743]: GAMING LEADER
        - paragraph [ref=f1e744]: 60%
        - paragraph [ref=f1e746]: of the top 10 global gaming developers are customers
      - generic [ref=f1e749]:
        - paragraph [ref=f1e751]: enterprise LEADER
        - paragraph [ref=f1e752]: 300k
        - paragraph [ref=f1e754]: active enterprise users
  - generic [ref=f1e758]:
    - img "Pixelated Blocks" [ref=f1e759]
    - generic [ref=f1e761]:
      - generic [ref=f1e763]:
        - generic [ref=f1e764]: TRUST
        - heading "Enterprise-grade security & compliance" [level=2] [ref=f1e767]
        - list
        - link "Visit the Trust Center" [ref=f1e771] [cursor=pointer]:
          - /url: https://trust.saucelabs.com/
      - generic [ref=f1e774]:
        - generic [ref=f1e775]: Certifications
        - generic [ref=f1e778]:
          - generic [ref=f1e779]:
            - paragraph [ref=f1e781]: ISO 42001
            - paragraph [ref=f1e782]: Certified
          - generic [ref=f1e783]:
            - paragraph [ref=f1e785]: GDPR
            - paragraph [ref=f1e786]: Compliant
          - generic [ref=f1e787]:
            - paragraph [ref=f1e789]: CCPA
            - paragraph [ref=f1e790]: Compliant
          - generic [ref=f1e791]:
            - paragraph [ref=f1e793]: ISO 27001
            - paragraph [ref=f1e794]: Certified
          - generic [ref=f1e795]:
            - generic [ref=f1e796]:
              - paragraph [ref=f1e797]: SOC 2
              - paragraph [ref=f1e798]: Type II
            - paragraph [ref=f1e799]: Compliant
          - generic [ref=f1e800]:
            - paragraph [ref=f1e802]: ISO 27701
            - paragraph [ref=f1e803]: Certified
  - generic [ref=f1e808]:
    - heading "Frequently Asked Questions" [level=2] [ref=f1e809]
    - generic [ref=f1e812]:
      - generic [ref=f1e815]:
        - button "Is AURA just AI-powered testing with a new name?" [ref=f1e816] [cursor=pointer]
        - paragraph [ref=f1e822]: No. While most AI testing tools focus on writing and maintaining tests faster, AURA works at a deeper level to improve release assurance across the full delivery lifecycle. The Sauce Labs platform extracts business intent, generates and runs your tests, correlates failures against nearly two decades of execution data, and closes the loop from production errors back into coverage. The payoff is confidence in software delivery that moves faster and still holds up under scrutiny.
      - generic [ref=f1e825]:
        - button "We already use AI coding assistants to generate tests. Why do we need AURA?" [ref=f1e826] [cursor=pointer]
        - paragraph [ref=f1e832]: Generating a test and verifying software are two different jobs. An AI assistant writes the script, whereas AURA runs your app on real devices and tells you what actually happened, remembers which tests fail intermittently, and catches the visual issues a model can’t see on a screen. With 40% of new AI-assisted code getting rewritten within two weeks and roughly half of AI-generated code failing its first review, generating faster without verification just moves the bottleneck downstream.
      - generic [ref=f1e835]:
        - button "Couldn’t we build a solution like AURA ourselves?" [ref=f1e836] [cursor=pointer]
        - paragraph [ref=f1e842]: "You can build the infrastructure, but you can’t build the dataset. The infrastructure is within reach: a device fleet, parallel execution, failure analytics, and ongoing maintenance, but it ties up your most expensive engineers on work that doesn’t differentiate your product. AURA’s AI is informed by learnings from more than 8.7 billion test runs over nearly two decades, and an in-house build starts from zero history. Forrester's Total Economic Impact study of Sauce Labs put the infrastructure savings alone at $1.3M over three years."
      - generic [ref=f1e845]:
        - button "Will AURA fit our existing tech stack?" [ref=f1e846] [cursor=pointer]
        - paragraph [ref=f1e852]: "Adoption fails when a tool demands a workflow change. AURA embeds where developers already work: VS Code, JetBrains, Cursor, Claude Code, and Copilot, plus agent access through the Sauce Labs MCP Server, every major delivery pipeline, and full support for Selenium, Cypress, Appium, and Playwright. Nothing migrates. Enter as an addition to the stack, starting with end-to-end or functional interface testing."
      - generic [ref=f1e855]:
        - button "Do we need specialized expertise to use AURA?" [ref=f1e856] [cursor=pointer]
        - paragraph [ref=f1e862]: No. With intent-based authoring, anyone can describe a user journey in plain language, “log in, add to cart, check out”, and get an executable test across web and mobile, with full code control whenever your engineers want it. Test creation runs up to 80% faster, taking teams from ideas to running tests in minutes. Support scales up to around-the-clock with dedicated technical account managers.
      - generic [ref=f1e865]:
        - button "How reliable are the test results?" [ref=f1e866] [cursor=pointer]
        - paragraph [ref=f1e872]: Most flakiness stems from brittle, selector-based tests rather than the underlying infrastructure. AI-authored tests survive interface changes and cut breaking changes by 75%, and every run returns video, screenshots, logs, and network captures, so failures are explainable rather than a mystery. Sauce AI for Insights flags flaky patterns across runs before they cost you a release.
      - generic [ref=f1e875]:
        - button "What security and compliance certifications do you hold?" [ref=f1e876] [cursor=pointer]
        - generic [ref=f1e881]:
          - paragraph [ref=f1e882]: Sauce Labs is ISO/IEC 42001 certified — the first international standard for responsible AI management — alongside ISO 27001, ISO 27701, SOC 2 Type II, and alignment with GDPR/CCPA.
          - paragraph [ref=f1e883]: Enterprise customers can request a full security review through our Trust Center.
      - generic [ref=f1e886]:
        - button "Why should we trust Sauce Labs?" [ref=f1e887] [cursor=pointer]
        - paragraph [ref=f1e893]: Our founders created Selenium and Appium, the frameworks that much of enterprise testing still runs on today. The platform has executed more than 8.7 billion tests over nearly two decades, and more than 300,000 enterprise users depend on it, including over 80% of the top 10 F2000 banks. You can likely verify with a peer reference in your own industry.
  - generic [ref=f1e895]:
    - heading "Stop letting quality be the bottleneck on AI-speed development." [level=2] [ref=f1e896]
    - generic [ref=f1e897]:
      - link "Book a Demo" [ref=f1e899] [cursor=pointer]:
        - /url: /request-demo
      - link "Start Free" [ref=f1e908] [cursor=pointer]:
        - /url: https://saucelabs.com/sign-up
  - contentinfo [ref=f1e910]:
    - generic [ref=f1e911]:
      - generic [ref=f1e912]:
        - generic [ref=f1e913]:
          - generic [ref=f1e914]:
            - heading "Products" [level=3] [ref=f1e915]
            - generic [ref=f1e916]:
              - paragraph [ref=f1e918]: Products
              - link "Real Device Cloud" [ref=f1e920] [cursor=pointer]:
                - /url: /products/real-device-cloud
              - link "Virtual Device Cloud" [ref=f1e921] [cursor=pointer]:
                - /url: /products/virtual-device-cloud
              - link "Sauce AI for Test Authoring" [ref=f1e922] [cursor=pointer]:
                - /url: /products/sauce-ai-for-authoring
              - link "Sauce AI for Insights" [ref=f1e923] [cursor=pointer]:
                - /url: /products/sauce-ai-for-insights
              - link "Sauce Visual" [ref=f1e924] [cursor=pointer]:
                - /url: /products/visual-testing
              - link "Mobile App Distribution" [ref=f1e925] [cursor=pointer]:
                - /url: /products/mobile-app-distribution
              - link "Sauce Error Reporting" [ref=f1e926] [cursor=pointer]:
                - /url: /products/error-reporting
          - generic [ref=f1e927]:
            - heading "Solutions" [level=3] [ref=f1e928]
            - generic [ref=f1e929]:
              - generic [ref=f1e930]:
                - generic [ref=f1e931]:
                  - paragraph [ref=f1e933]: Personas
                  - link "CTOs" [ref=f1e935] [cursor=pointer]:
                    - /url: /personas/aura-for-ctos
                  - link "Director" [ref=f1e936] [cursor=pointer]:
                    - /url: /personas/aura-for-directors-of-engineering
                  - link "Developers" [ref=f1e937] [cursor=pointer]:
                    - /url: /personas/aura-for-developers
                - generic [ref=f1e938]:
                  - paragraph [ref=f1e940]: Use Cases
                  - link "Intent-Based Test Generation" [ref=f1e942] [cursor=pointer]:
                    - /url: /use-case/intent-based-test-generation
                  - link "Resilient Test Infrastructure" [ref=f1e943] [cursor=pointer]:
                    - /url: /use-case/resilient-test-infrastructure
                  - link "Real-World Device Coverage" [ref=f1e944] [cursor=pointer]:
                    - /url: /use-case/real-world-device-coverage
                  - link "Automated Test Case Execution" [ref=f1e945] [cursor=pointer]:
                    - /url: /use-case/automated-test-execution
                  - link "AI-Powered Test Failure Analysis" [ref=f1e946] [cursor=pointer]:
                    - /url: /use-case/ai-powered-test-failure-analysis
                  - link "Integrated Beta Testing" [ref=f1e947] [cursor=pointer]:
                    - /url: /use-case/integrated-beta-testing
                  - link "Production Error Analysis" [ref=f1e948] [cursor=pointer]:
                    - /url: /use-case/production-error-analysis
                - generic [ref=f1e949]:
                  - paragraph [ref=f1e951]: Industries
                  - link "Financial Services" [ref=f1e953] [cursor=pointer]:
                    - /url: https://saucelabs.com/solutions/financial-institutions
                  - link "Retail" [ref=f1e954] [cursor=pointer]:
                    - /url: https://saucelabs.com/solutions/retail
                  - link "Insurance" [ref=f1e955] [cursor=pointer]:
                    - /url: https://saucelabs.com/solutions/insurance
                  - link "Healthcare" [ref=f1e956] [cursor=pointer]:
                    - /url: https://saucelabs.com/solutions/healthcare
                  - link "Gaming" [ref=f1e957] [cursor=pointer]:
                    - /url: https://saucelabs.com/solutions/gaming
              - generic [ref=f1e958]:
                - generic [ref=f1e959]:
                  - paragraph [ref=f1e961]: WHY SAUCE
                  - link "Why Sauce" [ref=f1e963] [cursor=pointer]:
                    - /url: /why-sauce
                - generic [ref=f1e964]:
                  - paragraph [ref=f1e966]: Compare
                  - link "Sauce Labs vs. TestMu" [ref=f1e968] [cursor=pointer]:
                    - /url: /sauce-labs-vs-lambdatest
                  - link "Sauce Labs vs. Browserstack" [ref=f1e969] [cursor=pointer]:
                    - /url: /sauce-labs-vs-browserstack
                  - link "Sauce Labs vs. Perfecto" [ref=f1e970] [cursor=pointer]:
                    - /url: /sauce-labs-vs-perfecto
                  - link "Sauce Labs vs. LLM" [ref=f1e971] [cursor=pointer]:
                    - /url: /sauce-labs-vs-diy-llms
                - generic [ref=f1e973]:
                  - paragraph [ref=f1e975]: SERViCES
                  - link "Enterprise Support" [ref=f1e977] [cursor=pointer]:
                    - /url: https://saucelabs.com/enterprise-support
                  - link "Premium Consulting Services" [ref=f1e978] [cursor=pointer]:
                    - /url: https://saucelabs.com/consulting-services
        - generic [ref=f1e980]:
          - heading "Resources" [level=3] [ref=f1e981]
          - generic [ref=f1e982]:
            - generic [ref=f1e983]:
              - generic [ref=f1e984]:
                - paragraph [ref=f1e986]: Docs & Support
                - link "Documentation" [ref=f1e988] [cursor=pointer]:
                  - /url: https://docs.saucelabs.com/
                - link "Changelog" [ref=f1e989] [cursor=pointer]:
                  - /url: https://changelog.saucelabs.com/en
                - link "Support" [ref=f1e990] [cursor=pointer]:
                  - /url: https://support.saucelabs.com/
                - link "Product tours" [ref=f1e991] [cursor=pointer]:
                  - /url: /demo-tours
                - link "FAQs" [ref=f1e992] [cursor=pointer]:
                  - /url: https://saucelabs.com/faqs
              - generic [ref=f1e993]:
                - paragraph [ref=f1e995]: How-To Guides
                - link "Selenium" [ref=f1e997] [cursor=pointer]:
                  - /url: https://docs.saucelabs.com/web-apps/automated-testing/selenium/quickstart/
                - link "Appium" [ref=f1e998] [cursor=pointer]:
                  - /url: https://docs.saucelabs.com/mobile-apps/automated-testing/appium/quickstart/
                - link "Cypress" [ref=f1e999] [cursor=pointer]:
                  - /url: https://docs.saucelabs.com/web-apps/automated-testing/cypress/quickstart/
                - link "Playwright" [ref=f1e1000] [cursor=pointer]:
                  - /url: https://docs.saucelabs.com/web-apps/automated-testing/playwright/quickstart/
                - link "Mobile app testing" [ref=f1e1001] [cursor=pointer]:
                  - /url: https://docs.saucelabs.com/mobile-apps/
                - link "Web app testing" [ref=f1e1002] [cursor=pointer]:
                  - /url: https://docs.saucelabs.com/web-apps/
                - link "CI" [ref=f1e1003] [cursor=pointer]:
                  - /url: https://docs.saucelabs.com/ci/
            - generic [ref=f1e1005]:
              - paragraph [ref=f1e1007]: Setup & Configure
              - link "Integrations" [ref=f1e1009] [cursor=pointer]:
                - /url: https://saucelabs.com/products/integrations-and-plugins
              - link "Supported browsers & devices" [ref=f1e1010] [cursor=pointer]:
                - /url: https://saucelabs.com/products/supported-browsers-devices
              - link "Platform configurator" [ref=f1e1011] [cursor=pointer]:
                - /url: https://saucelabs.com/products/platform-configurator
        - generic [ref=f1e1012]:
          - heading "Company" [level=3] [ref=f1e1013]
          - generic [ref=f1e1016]:
            - paragraph [ref=f1e1018]: about sauce
            - link "About Us" [ref=f1e1020] [cursor=pointer]:
              - /url: https://saucelabs.com/about-us
            - link "Trust Center" [ref=f1e1021] [cursor=pointer]:
              - /url: https://trust.saucelabs.com/
            - link "Case Studies" [ref=f1e1022] [cursor=pointer]:
              - /url: https://saucelabs.com/resources/case-studies
            - link "Careers" [ref=f1e1023] [cursor=pointer]:
              - /url: https://saucelabs.com/careers
            - link "News" [ref=f1e1024] [cursor=pointer]:
              - /url: https://saucelabs.com/company/news
            - link "Systems Status" [ref=f1e1025] [cursor=pointer]:
              - /url: https://status.saucelabs.com/
      - generic [ref=f1e1026]:
        - paragraph [ref=f1e1029]: © 2026 Sauce Labs Inc., All rights reserved. Sauce and Sauce Labs are registered trademarks owned by Sauce Labs Inc. in the United States, EU, and may be registered in other jurisdictions.
        - navigation [ref=f1e1030]:
          - link "Terms of Service" [ref=f1e1031] [cursor=pointer]:
            - /url: https://saucelabs.com/doc/terms-of-service
          - link "Privacy Policy" [ref=f1e1032] [cursor=pointer]:
            - /url: https://saucelabs.com/doc/privacy-policy
          - link "EEA" [ref=f1e1033] [cursor=pointer]:
            - /url: https://saucelabs.com/doc/eea
          - link "CCPA" [ref=f1e1034] [cursor=pointer]:
            - /url: https://saucelabs.com/doc/ccpa
          - button "Your Privacy Choices" [ref=f1e1035] [cursor=pointer]
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | const LoginPage = require('../pages/loginPage');
  3   | const InventoryPage = require('../pages/inventoryPage');
  4   | const CartPage = require('../pages/cartPage');
  5   | 
  6   | test('TC01: Login with valid credentials', async ({ page }) => {
  7   |   const login = new LoginPage(page);
  8   |   const inventory = new InventoryPage(page);
  9   | 
  10  |   await login.goto();
  11  |   await login.login('standard_user', 'secret_sauce');
  12  | 
  13  |   await expect(page).toHaveURL(/.*inventory\.html/);
  14  |   await expect(page.locator(inventory.logo)).toContainText('Swag Labs');
  15  | });
  16  | 
  17  | test('TC02: Login with incorrect username', async ({ page }) => {
  18  |   const login = new LoginPage(page);
  19  | 
  20  |   await login.goto();
  21  |   await login.login('wrong_user', 'secret_sauce');
  22  | 
  23  |   await expect(page.locator(login.errorMessage)).toContainText('do not match');
  24  | });
  25  | 
  26  | test('TC03: Login with incorrect password', async ({ page }) => {
  27  |   const login = new LoginPage(page);
  28  | 
  29  |   await login.goto();
  30  |   await login.login('standard_user', 'wrong_password');
  31  | 
  32  |   await expect(page.locator(login.errorMessage)).toContainText('Username and password do not match');
  33  | });
  34  | 
  35  | test('TC13: Click product image and name navigates to detail page', async ({ page }) => {
  36  |   const login = new LoginPage(page);
  37  |   const inventory = new InventoryPage(page);
  38  | 
  39  |   await login.goto();
  40  |   await login.login('standard_user', 'secret_sauce');
  41  | 
  42  |   await inventory.clickItemName();
  43  |   await expect(page).toHaveURL(/.*inventory-item\.html\?id=\d+/);
  44  | 
  45  |   await page.goBack();
  46  | 
  47  |   await inventory.clickItemImage();
  48  |   await expect(page).toHaveURL(/.*inventory-item\.html\?id=\d+/);
  49  | });
  50  | 
  51  | test('TC16: Add Sauce Labs Backpack to cart, badge shows 1', async ({ page }) => {
  52  |   const login = new LoginPage(page);
  53  |   const inventory = new InventoryPage(page);
  54  | 
  55  |   await login.goto();
  56  |   await login.login('standard_user', 'secret_sauce');
  57  | 
  58  |   await inventory.addBackpackToCart();
  59  | 
  60  |   await expect(page.locator(inventory.cartBadge)).toContainText('1');
  61  | });
  62  | 
  63  | test('TC19: Logout from side menu', async ({ page }) => {
  64  |   const login = new LoginPage(page);
  65  |   const inventory = new InventoryPage(page);
  66  | 
  67  |   await login.goto();
  68  |   await login.login('standard_user', 'secret_sauce');
  69  | 
  70  |   await inventory.openMenu();
  71  |   await inventory.clickLogout();
  72  | 
  73  |   await expect(page).toHaveURL(/.*\/$/);
  74  | });
  75  | 
  76  | test('TC20: All Items returns to product list from cart', async ({ page }) => {
  77  |   const login = new LoginPage(page);
  78  |   const cart = new CartPage(page);
  79  | 
  80  |   await login.goto();
  81  |   await login.login('standard_user', 'secret_sauce');
  82  | 
  83  |   await cart.openCart();
  84  |   await expect(page).toHaveURL(/.*cart\.html/);
  85  | 
  86  |   await cart.openMenu();
  87  |   await cart.clickAllItems();
  88  | 
  89  |   await expect(page).toHaveURL(/.*inventory\.html/);
  90  | });
  91  | 
  92  | test('TC21: About opens new tab', async ({ page, context }) => {
  93  |   const login = new LoginPage(page);
  94  |   const inventory = new InventoryPage(page);
  95  | 
  96  |   await login.goto();
  97  |   await login.login('standard_user', 'secret_sauce');
  98  | 
  99  |   await inventory.openMenu();
  100 | 
> 101 |   const newPage = context.waitForEvent('page');
      |                           ^ Error: browserContext.waitForEvent: Test timeout of 30000ms exceeded.
  102 |   await inventory.clickAbout();
  103 |   const aboutPage = await newPage;
  104 | 
  105 |   await expect(aboutPage).toHaveURL(/.*saucelabs\.com/);
  106 |   await aboutPage.close();
  107 | });
  108 | 
```