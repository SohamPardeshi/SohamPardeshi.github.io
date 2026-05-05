import styles from '@/writing/PostPage.module.css'
import QuoteBox from '@/writing/components/QuoteBox'
import Math from '@/writing/components/Math'
import Ghost from '@/writing/components/Ghost'

export default function OnMetricsPost() {
  return (
    <article className={styles.article }>
      <p>
        One of my coworkers keeps a permanent status message on Microsoft Teams:
      </p>
      <QuoteBox
        quote="Perf Tip: Optimization without measurement is like shooting in the dark. 🔦"
        attribution="Rajesh, my coworker"
      />
      <p>
        It's a good quote. A large part of software engineering is deciding how to optimize different parts of our systems. We pick a metric (e.g. network speed, IOPs, or memory usage), measure it across different implementations of our system, and push the code that scores best on that metric. 
      </p>
      <p>
        Hard to argue with that, right?
      </p>
      <p>
        But the more I saw Rajesh's quote, the more I felt bothered by it. Something was off and I couldn't pinpoint what. I started writing this essay to help myself articulate why I subconsciously disagreed with a seemingly-true statement.
      </p>
      <p>
        It took me on a journey through what little I know of math, movies, architecture, and software. I came to believe two concerning things which I hope to convince you of:
      </p>
      <ul>
        <li>People <i>greatly</i> undervalue qualities</li>
        <li>We have built structures that cause us to lose our good taste</li>
      </ul>
      <p>
        So how did I get to these conclusions? Well, I started by going back to the basics: definitions.
      </p>

      <h2>What is optimization?</h2>
      <p><a target="_blank" href="https://en.wikipedia.org/wiki/Mathematical_optimization">Optimization</a> is the process of selecting the best element from a set of options. This requires two things:
      </p>
      <ul>
        <li>a set <Math>{'S'}</Math> of options to choose from</li>
        <li>a selection criterion <Math>{'f'}</Math> that defines what "best" means in this context</li>
      </ul>
      <p>
        Our goal is to find the best option <Math>{'b'}</Math> from our set <Math>{'S'}</Math> according to our selection criterion <Math>{'f'}</Math>.
      </p>
      <p>
        <Ghost note={<>For my friends who avoid math, don't stress! This notation is really not important to my point. <br/><br/> Skip it and keep reading, I promise you will be rewarded.</>}>Formally</Ghost>, we can write this as finding <Math>{'b \\in S'}</Math> such that <Math>{'f(b) \\geq f(s)'}</Math> for all <Math>{'s \\in S'}</Math>.
      </p>
      <p>
        So far, Rajesh's quote seems to hold up well. If we are trying to optimize something and we have a measurement function, then we can map all of our options to the real numbers. Since numbers are ordered, we can easily compare our options by comparing the numbers.
      </p>
      <p>
        For example, suppose we are trying to choose between two algorithms. Our selection criterion is to pick the faster one. We measure algorithm A and get a runtime of 100ms. We measure algorithm B and get a runtime of 50ms. It is obvious that algorithm B is better by this metric.
      </p>

      <h2>What do people actually optimize?</h2>
      <p>
        <Ghost note={<>Not <i>literally</i> everything. I'm being dramatic.</>}>Literally everything</Ghost>.
      </p>
      <p>
        Any time someone is trying to do their best, they are optimizing something. Here are some examples from my community:
      </p>
      <h4>(1) Hollywood and the Film Industry</h4>
      <p>
        My sister was a <Ghost note="There are less than 40 people in the US who get to decide the direction of kids' television. Very proud of her!">Creative Director</Ghost> at Nickelodeon. Her job was to make the best possible kids' TV show.
      </p>
      <p>
        She told me about how she would run focus groups with children and survey their engagement to decide which shows to greenlight, which to cancel, and which to rework. The process is methodical: put a pilot in front of a room of seven-year-olds, use eye-tracking to measure how much they pay attention, ask them structured questions afterward, and use that data to make decisions.
      </p>
      <p>
        This is a standard process in Hollywood. As I write this, Marvel is running <a target="_blank" href="https://www.screengeek.net/2026/04/14/avengers-doomsday-test-screening-reaction/">test screenings for their new movie Avengers: Doomsday</a>. They are trying to measure audience reactions to decide which scenes to cut and how different run lengths affect viewer satisfaction.
      </p>
      
      <h4>(2) K-12 Learning Outcomes</h4>
      <p>
        My other sister <Ghost note="Also very proud of her!">runs the Philadelphia School District</Ghost>. Her job is to best prepare students for the real world. 
      </p>
      <p>
        The school district is constantly rolling out new programs, e.g. they are currently exploring ways to teach students how to safely engage with AI. They evaluate the success of these programs by looking at how standardized test results change over time. They also survey teachers and ask them to rate the effectiveness of the programs on a scale of 1 to 10. If scores go up, they consider the program a success for student learning outcomes. If they don't go up, my sister has to decide whether to cut the program.
      </p>

      <h4>(3) Dating Apps</h4>
      <p>
        My cousin is a UX researcher at Hinge. Her job is to give users the best dating experience on the app. 
      </p>
      <p>
        Hinge (like all social media apps) tracks all sorts of metrics related to user engagement. They measure how long users spend on the app, how many messages they send, the length of those messages, and how many matches they get. One of her goals is to minimize the time it takes for a person to "get off the app", i.e. "good churn". She runs A/B tests to see how different features affect these metrics and she uses that data to make product decisions.
      </p>

      <h2>Quantifiable Metrics</h2>
      <p>
        You may have noticed that these examples have a few things in common. They all involve my family. They all explain how someone does their job. And they all describe an optimization via quantifiable metrics.
      </p>
      <p>
        Notably, these metrics are only <i>approximations</i> of the true selection criterion.
      </p>
      <ul>
        <li>
          At Nickelodeon, the true selection criterion is "how much do kids like this show?", but we approximate that with "how much attention do they pay to it?" and "what do they say about it in a survey?".
        </li>
        <li>
          In education, the true selection criterion is "how well are students prepared for the real world?", but we approximate that with "how well do they do on standardized tests?"
        </li>
        <li>
          In dating apps, the true selection criterion is "how good of a dating experience does this app provide?", but we approximate that with "how long does it take for users to find a match on the app?"
        </li>
      </ul>

      <p>
        Let's go back to our formal definition of optimization.
      </p>
      <p>
        Our goal is still to do our best so we are trying to select the best option in our set <Math>{'S'}</Math> given a selection criterion <Math>{'f'}</Math>. However, in these scenarios, we do not have an easy way to evaluate <Math>{'f'}</Math>. There is no number that captures a kid's enjoyment or a student's preparedness for the real world.
      </p>
      <p>
         Instead we use different criterion <Math>{'\\hat{f}'}</Math> that we can evalute. We hope it is a good approximation of <Math>{'f'}</Math>. Our new goal is to try to find <Math>{'\\hat{b} \\in S'}</Math> such that <Math>{'\\hat{f}(\\hat{b}) \\geq \\hat{f}(s)'}</Math> for all <Math>{'s \\in S'}</Math>.
      </p>

      <p> 
        It's well-known that these approximations are imperfect. Kids might pay attention to a show but not actually like it. Students might do well on tests but not be prepared for the real world. Users might find matches on the app but not have a good dating experience.
      </p>
      <p>
        In these examples, my family members are all aware of these limitations. So why do they still use metrics?
      </p>

      <h2>Why do people like metrics?</h2>
      <h4>Reason #1: Numbers justify themselves</h4>
      <p>
        Consider my sister who works in Hollywood. She has years of experience, a deep understanding of children's media, and strong instincts about what works.  <Ghost note="I should pitch this premise to her for a new TV show">If aliens came to Earth and threatened to blow up our planet unless we created an excellent children's TV show, she would be on the short list of people that humanity would send to get the job done.</Ghost>
      </p>
      <p>
        She has one of the best taste for children's television in the entire world. But she's not incentivized to exercise her taste because of ... office politics.
      </p>
      <p>
        If she greenlights a show based on her gut and it flops, that's <i>her</i> call. She owns the failure personally and has to anwer to executives. These executives know much less about children's media than my sister. They hire her precisely because she has knowledge and good taste that they do not. But because the executives know so little, they are not able to evaluate whether my sister's instincts are good. They only know that (1) the show flopped and (2) that my sister said it would not flop. 
      </p>
      <p>
        On the other hand, if she greenlights a show because the focus group data said kids were engaged, the failure belongs to the process. The data said it would work. No executive can blame her judgment, because she didn't use her judgment - she used the numbers.
      </p>
      <p>
        This is the main appeal of quantitative metrics: they shift the locus of responsibility from an individual to a system. A metric is a decision-making apparatus that doesn't require anyone to stake their reputation on a subjective call. <Ghost note={<>In the early years of Apple, Steve Jobs refused to use any focus groups. He famously said that "[c]ustomers don't know what they want anyway." <br/><br/> I'm not a fan of Steve Jobs, but there are many situations where I agree with this point.</>}>It replaces the question "do I think this is good?" with "what does the data say?". </Ghost>
      </p>
      <p>
        The second question is far more comfortable to answer. You can't be wrong about what the data says; you can only be wrong about whether the data measures the right thing, and that's a much harder mistake to pin on any one person.
      </p>
      <p>
        This matters especially in organizations, where decisions need to be <i>justified</i> to other people. It is very difficult to walk into a room of executives and say "I think we should greenlight this show because it has a quality I can't quite articulate." It is very easy to walk into that same room and say "the engagement data shows 87% sustained attention through the third act." 
      </p>
      <p>
        The second sentence doesn't contain more information than the first. <Ghost note="Me. I would argue...">Some would argue</Ghost> that it contains less information because engagement metrics capture only a small part of the aesthetic experience. But we are strongly incentivized to say the second sentence because it is safer.
      </p>
      <p>
        This safety is genuinely useful when someone has bad judgment. For the sake of the children, we would all want my dad to consult the focus group data before greenlighting a children's show. But metrics can't tell the difference between my dad and my sister. They are a subsidy for bad taste, funded by good taste.
      </p>

      <h4>Reason #2: Physics Envy</h4>
      <p>
        For most of human history, physics did not rely on math.
      </p>
      <p>
        Aristotle's physics was built on categories: heavy things fall because their natural place is the center of the earth, fire rises because its natural place is above. Objects had <i>tendencies</i> and <i>essences</i> rather than any sort of mathematical equation. 
      </p>
      <p>
        Sometime in the 1600s, Galileo famously claimed that <a target="_blank" href="https://thonyc.wordpress.com/2010/07/13/the-book-of-nature-is-written-in-the-language-of-mathematics/">"the book of nature is written in the language of mathematics."</a> This was a radical view to hold at the time and <Ghost note={<>Part of why they disliked this comparison is because <a target="_blank" href="https://plato.stanford.edu/entries/galileo/#:~:text=4.1-,Mathematical%20Physics,-As%20the%20title">mathematics was seen as lower status work</a>. Mathematicians mainly did computations to help astronomers and engineers. They were not <i>great thinkers</i> like the Aristotliean physicists.</>}>most Aristotelian physicists pushed back on Galileo's ideas</Ghost>. They rebutted that math was about idealized abstractions (e.g. perfect circles, Pythagorean triples); but nature was messy and random. How could the two fields be related?
      </p>
      <p>
        Well, it turns out they were related. Deeply, deeply related. Discovering that the natural world is governed by precise mathematical laws revolutionized science. Fueled by this, physics has become (in my opinion) the most successful quantitative science.
      </p>
      <p>
         Every other field of study -- economics, education, psychology, political science, management, social science -- has been chasing the same sort of mathematical revolution. Economists build mathematical models of markets. Educators measure learning with standardized tests. Psychologists quantify personality with numerical scales. In these fields, we reason that if physics made progress by measuring things precisely, then <i>we</i> can make progress by measuring things precisely too. This phenomena is called <a target="_blank" href="https://en.wikipedia.org/wiki/Physics_envy">physics envy</a>.
      </p>

      <p>
          <Ghost note={<>I am shamelessly exploiting this bias right now. Earlier, I wrote some formal definitions of optimization. Those definitions were correct, but completely irrelevant. I added them <i>specifically</i> so I could manipulate you by taking advantage of your physics envy. <br/><br/> Stop and think. Did you find those definitions appealing? Did you believe me more because I wrote some math notation? If yes, then you may be susceptible to this bias.<br/><br/>That mathetmatical notation just repeated what I said in plain English. It added nothing new to my argument!</>}>
            This bias has broken out of academia and ingrained itself into the public consciousness. There's a widespread, mostly unconscious belief that real knowledge is quantitative. That if we can't measure something, we don't really understand it. That the more precisely we can express a claim in numbers, the more true it is.
          </Ghost>
      </p>
      <p>
        This is a <a target="_blank" href="https://en.wikipedia.org/wiki/Cognitive_bias">cognitive bias</a>. Math can be great. But it is not the only way to understand the world. In most cases, it is not the best way to understand the world. In many cases, I think it is a terrible way to understand the world.
      </p>

      <h4>Reason #3: Some things can actually be quantified</h4>
      <p>
        To Rajesh's credit, many things in software engineering can actually be quantified. We can genuinely compare algorithms based on their runtime, complexity, memory usage, energy consumption, and so on. We are not making any approximations when we do this. This is what programmers typically mean when we say 'optimization' and it is clearly what Rajesh was referring to in his status message.
      </p>
      <p>
        And these scenarios are great! Software engineering does not suffer (much) from physics envy because our field is actually deeply related to math. We get all sorts of benefits from being able to quantify metrics:
      </p>
      <ul>
      <li>
        We get to be lazy. Our numbers are clear and unambiguous and require very little thinking to intepret.
      </li>
      <li>
        We don't need to take risks. Numbers are self-justifying and can take all the blame if things go wrong.
      </li>
      <li>
        We usually don't have any other option because we work with things that are genuine quantities. They have no properties other than their measurable ones.
      </li>
      </ul>

      <h2>What do people actually optimize? (continued...)</h2>
      <p>
        Let's take a step back for a second. Earlier, I gave three examples of optimization from my family members in Hollywood, education, and UX research. In all three cases, I cherry-picked an example where someone optimized something via a quantifiable metric. 
      </p>
      <p>I intentionally left out an important example with a qualitative metric:</p>
      <h4>(4) Personal Preferences</h4>
      <p>
        I have a favorite color. <Ghost note="Panda Express">A favorite restaurant</Ghost>. A favorite movie. A favorite song.
      </p>
      <p>
        When I say that blue is my favorite color, I am implicitly considering the set of all colors that I have seen and selecting the "best" one to my preferences. This is, by definition, an optimization.
      </p>
      <p>
        But how can I do this? I can't measure how much I like a color or a restaurant. There is no number which describes the way I feel when I see blue or purple or nacho cheese (a shade of yellow). Yet, I am capable of having a favorite; there is clearly a correct answer.
      </p>
      <p>
        It turns out that in the real world we optimize all of the time even when our selection criterion <Math>{'f'}</Math> is not a mapping to the real numbers. We often use our personal preferences as a <a target="_blank" href="https://en.wikipedia.org/wiki/Partially_ordered_set">partially-ordered</a> selection criterion. 
      </p>
      <p>
        In other words, we are all capable of saying that we prefer A to B <i>without</i> actually specifying how much more we prefer A to B. Because that extra information which numbers give us (the magnitude between our preferences) is not necessary to pick the best option.
      </p>

      <h2>What's the alternative to metrics?</h2>
      <p>
        What's the alternative to metrics? I have begun to call it: <i>taste</i>.
      </p>
      <p>
        Taste is the ability to evaluate something without reducing it to a number first. It is a trained sensitivity to quality that operates on the whole of an entity rather than on any individual measurable property.
      </p>
      <p>
        <Ghost note={<>Someone could argue that in this scenario my sister simply lacks the language to describe her taste. And that she should be able to perfectly explain her choice given the time to proper communicate.<br/><br/> I reject this. Taste is inherently tied to preference. And we have no reason to believe that preference is communicable. The greatests poets and writers could describe how a painting makes them feel. But I would never feel exactly the same way as them when seeing that painting and reaing their work.</>}>When my sister watches a pilot and feels that something is off about it, she is exercising taste. She does not need a focus group. She might not be able to tell you what is off. She might not be able to point to a single scene or line of dialogue. But she has developed a valuable mental model of quality that is richer and more nuanced than any set of quantifiable metrics could capture. Her discomfort is information. It's just not quantifiable information.</Ghost>
      </p>
      <p>
        Programmers have this too. We often talk about how code can be "elegant" or "maintainable". These are not quantifiable properties. They are holistic judgments that require taste to make. Two implementations of the algorithm might have the same runtime, memory usage, and energy consumption, but one might be more elegant than the other. The more elegant one is better, even though we can't measure that elegance with a metric.
      </p>
      <p>
        This is what taste does that metrics cannot: it evaluates properties that are real but resistant to measurement.
      </p>

      <h2>What is so concerning about this?</h2>
      <p>
        Our obsession with measurement is actively eroding our opportunity to develop taste.
      </p>
      <p>
        When we default to data-driven decisions, we stop asking "what do I think is good?" and start asking "what does the data say?" Over time, this atrophies our ability to make holistic judgments. We become dependent on the numbers. And when the numbers point somewhere slightly wrong (<Ghost note="Did I make you envious?">because <Math>{'\\hat{f} \\neq f'}</Math></Ghost>) we follow them there anyway, because we've lost the capacity to override them.
      </p>
      <p>
        When I look around the world, I see too many examples of this:
      </p>

      <p>
        <b>Film</b>. <Ghost note="Inside Out 2, Deadpool & Wolverine, Despicable Me 4, Moana 2, and Dune: Part Two">Every one of the top five highest-grossing films of 2024 was a sequel, remake, or reboot.</Ghost> Studios keep making these because the metrics say franchise IP outperforms originals. The metrics are probably right. But I haven't found a single person in my life whose favorite movie came out after 2019. Everyone I talk to has the same feeling: movies are boring now, even though nobody knows why.
      </p>
      <p>
        <b>Education</b>. Because of grade inflation, the average high school GPA has risen from 2.68 to 3.11 over the past thirty years. <Ghost note={<>In education research, I have heard this called <a href="https://en.wikipedia.org/wiki/Goodhart's_law">Goodhart's Law</a> </>}>Students have never looked better on paper.</Ghost> But every high school teacher I have talked to has felt deep concern for their most recent batches of students. The teachers feel like their students are more stressed, less capable, and largely unprepared for the real world.
      </p>
      <p>
        <b>Basketball</b>. In the late 2010s, people realized that the expected value of a three-point shot exceeds that of a mid-range jumper. The conclusion was obvious: shoot more threes. When it was just Steph Curry doing it, the game was exciting because he was doing something nobody else could do. But once everyone copied this statistically superior strategy, <Ghost note="Not everyone agrees with this. But it is a common opinion.">the game became less fun to watch.</Ghost> Games have become more repetitive because there are many ways to make two-point shots, but only a few ways to make three-point shots. The metrics says the game is more efficient. But the goal of basketball is entertainment, not efficiency. 
      </p>
      <p>
        <b>Video games</b> have recently been following a similar trend. The dominant business model is "games as a service" which involves a free-to-play title that is continuously updated based on player engagement data. Every interaction is tracked so designers know exactly where players drop off, which skins sell, which difficulty curves maximize retention. This results in games like <Ghost note="Supposedly, Blizzard designed around monetization metrics so aggressively that it costs over $500,000 to fully max out a character">Diablo Immortal</Ghost>. The engagement numbers are excellent and the game is still making money from a small number of players. But a majority of the Diablo community hates the game.
      </p>
      <p>
        <b>Social media</b>. Every major social platform is optimized for engagement. These metrics consistently favor content that incites outrage or addiction over content that is thoughtful or delightful. Meta's own researchers found Instagram was harmful to teenage girls' mental health and the company did nothing about it. All of my friends use social media, but almost none of them find it valuable or connective in the way we once thought it might be.
      </p>
      <p>
        <b>Architecture</b>. In the 1950s, modernist architects wanted to build cities around rationalized metrics: traffic throughput, housing units per acre, sunlight exposure. The result was <a target="_blank" href="https://en.wikipedia.org/wiki/Pruitt%E2%80%93Igoe">Pruitt-Igoe in St. Louis</a>, a housing project that satisfied every quantifiable criterion and was so miserable to live in that the city demolished it twenty years later. When I consider the neighborhoods that are most the beautiful to me, they are the products of accumulated human taste over generations. No quantifiable design process could replicate them.
      </p>
      <p>
        In every case, the pattern is the same. The metrics improved. The thing the metrics were supposed to measure got worse. And only the people closest to the work (e.g. the teachers, moviewatchers, viewers, residents) noticed the decline in quality. 
      </p>


      <h2>What I'm not saying</h2>
      <p>
        I'm not saying that researchers should stop runing focus groups and A/B tests.
      </p>
      <p>
        I'm not saying students should stop taking standardized tests.
      </p>
      <p>
         I'm not even saying that social media applications should stop tracking user engagement metrics.
      </p>
      <p>
        Metrics are a tool. They are an excellent tool. I believe we should measure as many things as we can. So I am <i>definitely</i> not arguing that we should throw our numbers away.
      </p>


      <h2>What I am saying</h2>
      <p>
        I am saying that quantitative metrics are not the only tool, and that we have become so reliant on them that we've forgotten the other one exists.
      </p>
      <p>
        That other tool is taste - the ability to evaluate the qualitative aspects of something <Ghost note={<>Note the word "reduce". When we try to convert a quality into a quantity, we are incurring data loss. If you are truly data-driven, then why are you throwing data away?</>}>without reducing those qualities to quantities</Ghost>. And taste is not a weaker form of measurement. It is a different form of knowledge. It captures things that metrics structurally cannot: coherence, beauty, soul, whether something feels alive or dead. These properties are real. They matter. And they are invisible to any spreadsheet.
      </p>
      <p>
        The problem is not that organizations use metrics. The problem is that metrics have become the only acceptable form of justification. If I can't put a number on it, I can't defend it in a meeting. And so people stop caring about qualitative things. They stop developing their own judgment because judgment is risky and data is safe. Over time, the people making decisions lose the very faculty that made them worth hiring in the first place.
      </p>
      <p>
        My sister was one of fewer than forty people in the country who got to shape the direction of children's television. She was in that position because she had extraordinary taste and an intuition about what makes a great kids' show that was built over years of deep attention to the craft. And yet the structure she worked within pushed her, constantly, to defer to focus group data over her own judgment. Not because the data knew more than she did. But because the data could survive a meeting with executives, and her taste could not.
      </p>
      <p>
        This is what I want to change.
      </p>
      <p>
        If you are a leader and you have hired someone because they have good judgment, then let them use it. Ask them what they think is good and take that answer seriously, even when they can't back it up with a chart. Create an environment where "I believe this is better, and I have a lot of experience in this field" is an acceptable justification, not just "the data says this performs 12% better on metric X." Trust in your employees' taste.
      </p>
      <p>
        And if you are a designer, a teacher, an engineer, an  editor, then do not let your taste atrophy. Pay close attention to the things you work on and build your own internal sense of what quality looks like. <Ghost note="While writing this, I myself had to look up many quantifiable metrics to validate my instinct that the film industry, the education sector, etc... were doing poorly. ">You can and should use quanitifiable metrics as a <i>sanity check</i>, but do not let them be the only factor when making your decision.</Ghost>
      </p>
      <h2>Parting thoughts</h2>
      <p>
        I started this essay because Rajesh's quote bothered me and I couldn't explain why. But now I think I can.
      </p>
      <p>
        "Optimization without measurement is like shooting in the dark."
      </p>
      <p>
        The quote is entirely true in the domain Rajesh intended it: software performance. When you are choosing between two sorting algorithms, you <i>should</i> measure them. Your choice is not a matter of taste,but a matter of fact.
      </p>
      <p>
        But the quote becomes dangerous when you extend it beyond that domain. Because it implies that all optimization requires measurement. And that is not true.
      </p>
      <p>
        Every great film, every great building, every great school, every great product was shaped by someone who could tell the difference between good and excellent without a metric to prove it. They were shooting in the dark - and yet they could see better than most of us.
      </p>
      <p>
        This ability to see in the dark is taste. And I am deeply worried that it is disappearing in the modern world.
      </p>
      <p>
        We have built an incentive structure where people are rewarded for not developing their instincts. We teach them the numbers will handle everything and that measurement is enough.
      </p>
      <p>
        It isn't.
      </p>
    </article>
  )
}
