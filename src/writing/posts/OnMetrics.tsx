import styles from '@/writing/PostPage.module.css'
import QuoteBox from '@/writing/components/QuoteBox'
import Math from '@/writing/components/Math'
import Ghost from '@/writing/components/Ghost'
 
export default function OnMetricsPost() {
  return (
    <article className={styles.article}>
 
      <hr style={{height: '1px', border: 'none', backgroundColor: 'lightgray', marginTop: '20px'}}/>
      <p style={{ color: '#999', fontSize: '14px'}}>This article was designed for a computer screen. On mobile, you must manually click on the underlined text to see all the content.</p>
      <hr style={{height: '1px', border: 'none', backgroundColor: 'lightgray', marginBottom: '20px'}}/>
 
      <p>
        One of my coworkers keeps a permanent status message on Microsoft Teams:
      </p>
      <QuoteBox
        quote="Perf Tip: Optimization without measurement is like shooting in the dark. 🔦"
        attribution="Rajesh, my coworker"
      />
      <p>
        It's a good quote. As software engineers, a large part of our jobs is deciding how to optimize parts of our systems. We pick a metric (e.g. network speed, IOPs, or memory usage), measure it across a few different implementations of our system, and then push the code that scores best on that metric.
      </p>
      <p>
        Hard to argue with that, right?
      </p>
      <p>
        But the more I saw Rajesh's quote, the more I felt bothered by it. Something was off and I couldn't pinpoint what. I started writing this essay to help myself articulate why I subconsciously disagreed with a seemingly-true statement.
      </p>
      <p>
        It took me on a journey through what little I know of math, movies, architecture, and sports. I came to believe three concerning things which I hope to convince you of:
      </p>
      <ul>
        <li>People only have two tools to evaluate the world: <i>measurement</i> and <i>taste</i></li>
        <li>Our organizations are structured so that individuals are incentivized to ignore taste</li>
        <li>As a result, humans are losing their ability to properly evaluate the world</li>
      </ul>
      <p>
        So how did I get to this drastic conclusion? Well, I started by going back to the basics: definitions.
      </p>
 
      <h2>What is optimization?</h2>
      <p>
        <a target="_blank" href="https://en.wikipedia.org/wiki/Mathematical_optimization">Optimization</a> is the process of selecting the best element from a set of options. This requires two things:
      </p>
      <ul>
        <li>a set <Math>{'S'}</Math> of options to choose from</li>
        <li>a selection criterion <Math>{'f'}</Math> that defines what "best" means in this context</li>
      </ul>
      <p>
        Our goal is to find the best option <Math>{'b'}</Math> from our set <Math>{'S'}</Math> according to our selection criterion <Math>{'f'}</Math>.
      </p>
      <p>
        <Ghost note={<>For my friends who avoid math, don't stress! This notation is not important to my point. <br/><br/> Skip it and keep reading, I promise you will be rewarded.</>}>Formally</Ghost>, we can write this as finding <Math>{'b \\in S'}</Math> such that <Math>{'f(b) \\geq f(s)'}</Math> for all <Math>{'s \\in S'}</Math>.
      </p>
      <p>
        So far, Rajesh's quote seems to hold up well. If we are trying to optimize something and we have a measurement function, then we can map all of our options to the real numbers. Since numbers are ordered, we can easily compare our options by comparing the numbers.
      </p>
      <p>
        Let's illustrate this with a real-world example of optimization:
      </p>
      <p>
        You overslept and are trying to get to work quickly. Your options are to take the highway or the back roads. Because you are late, your selection criterion is travel time. Google Maps is your measurement function: it reduces each route to a single number. The highway becomes 20 minutes. The back roads become 15 minutes. Instead of comparing routes, you compare numbers. You use your trusty calculator to check that 15 is less than 20. Based on this, you conclude that the back roads are better.
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
        Hinge (like all social media apps) tracks all sorts of metrics related to user engagement. They measure how long users spend on the app, how many messages they send, the length of those messages, and how many matches they get. One of her goals is to minimize the time it takes for a person to "get off the app", i.e. find a date. She runs A/B tests to see how different features affect these metrics and she uses that data to make product decisions.
      </p>
 
      <h2>Quantities</h2>
      <p>
        These examples have some things in common. They all involve my family doing cool things. And they all describe an optimization via <i>quantities</i>: properties of things that can be expressed as numbers.
      </p>
      <p>
        Notably, these quantities are just an approximation of the true selection criterion.
      </p>
      <ul>
        <li>
          At Nickelodeon, the true selection criterion is "how much do children enjoy watching this TV show?" which we approximate to "how much attention do they pay to it?"
        </li>
        <li>
          In Philadelphia schools, the true selection criterion is "how well are students prepared for the world?" which we approximate to "how well do they do on standardized tests?"
        </li>
        <li>
          In dating apps, the true selection criterion is "how good of a dating experience does this app provide?" which we approximate to "how long does it take for users to find a match on the app?"
        </li>
      </ul>
      <p>
        It's well-known that these approximations are imperfect.
      </p>
      <p>  
        Kids might pay attention to a show but not actually like it. Students might do well on tests but not be prepared for the real world. Users might find matches on the app but not have a good dating experience.
      </p>
      <p>
        Formally, the goal is still to choose the best option in our set <Math>{'S'}</Math>. But in these scenarios, we don't know how to evaluate our true selection criterion <Math>{'f'}</Math> directly.
      </p>
      <p>
          Instead, we create our own criterion <Math>{'\\hat{f}'}</Math> that is easier to measure and hope that it is a good approximation. Our optimization tries to find <Math>{'\\hat{b} \\in S'}</Math> such that <Math>{'\\hat{f}(\\hat{b}) \\geq \\hat{f}(s)'}</Math> for all <Math>{'s \\in S'}</Math> and we hope that <Math>{'\\hat{b} = b'}</Math>.
      </p>
      <p>
        Clearly, there's a gap between our approximation and our true criterion. So what's in this gap? 
      </p>

      <h2>Qualities</h2>
      <p>
        Well, there are only three reasons why an approximation might fall short of our true goal:
      </p>
      <ol>
        <li>We are measuring the wrong quantities.</li>
        <li>We are measuring the right quantities, but not accurately enough.</li>
        <li><Ghost note={<>People may object to the idea that some properties cannot be quantified. I won't spend any time arguing this.<br/><br/> Instead, I'll point out that, practically, on Earth, today, the type of measurement required to <i>fully</i> represent all properties numerically does not exist.</>}>Our true goal is affected by something unquantifiable.</Ghost></li>
      </ol>
      <p>
        The first two reasons are just a form of measurement error. But the last reason is something fundamental. We have a name for these properties that cannot be measured: <i>qualities</i>. 
      </p>
      <p>
        No number can express a child's enjoyment of a show - whether a character feels like their friend, whether the story lingers in their imagination, whether they love it for an hour or for a year. These are qualities. They are immeasurable. Yet, they greatly influence whether a show is enjoyable. 
      </p>
      <p>
        Qualities are exactly why some goals can never be approximated well. Despite this inherent limitation, some people still try to improve their approximations by reducing qualities into quantities using tricks like <a target="_blank" href="https://en.wikipedia.org/wiki/Likert_scale">Likert scales</a>. But no matter how much you try to quantify a quality, by definition, you will always lose information.
      </p>
      <p>
        My family is all very smart. They are aware of these limitations at work. So why do they still use quantities?
      </p>
 
      <h2>Why do people use quantities?</h2>
 
      <h4 style={{marginTop: '10px'}}>Reason #1: Numbers justify themselves</h4>
      <p>
        Consider my sister who works in Hollywood. She has years of experience, a deep understanding of children's media, and strong instincts about what works. <Ghost note="I should pitch this premise to her for a new TV show">If aliens came to Earth and threatened to blow up our planet unless we created an excellent children's TV show, she would be on the short list of people that humanity would send to get the job done.</Ghost>
      </p>
      <p>
        She has some of the best taste for children's television in the entire world. But she's not incentivized to exercise her taste because of ... office politics.
      </p>
      <p>
        If she greenlights a show based on her gut and it flops, that's <i>her</i> call. She owns the failure personally and has to answer to executives. These executives know much less about children's media than my sister. They hire her precisely because she has knowledge and good taste that they do not. But because the executives know so little, they are not able to evaluate whether my sister's instincts are good. They only observe that (1) the show flopped and (2) that my sister said it would not.
      </p>
      <p>
        On the other hand, if she greenlights a show because the focus group data said kids were engaged, the failure belongs to the process. The data said it would work. No executive can blame her judgment, because she didn't use her judgment. She used the numbers.
      </p>
      <p>
        This is the main appeal of quantitative metrics: they shift the locus of responsibility from an individual to a system. A metric is a decision-making apparatus that doesn't require anyone to stake their reputation on a subjective call. <Ghost note={<>In the early years of Apple, Steve Jobs refused to run focus groups. He famously said that "customers don't know what they want." <br/><br/>One part of Jobs' reasoning was that he valued the taste of his design team higher than he valued customer-driven input.</>}>It replaces the question "do I think this is good?" with "what does the data say?".</Ghost>
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
        This safety is genuinely useful when someone has bad judgment. If my dad were making the call instead of my sister, the executives (and the children) would be better off if he blindly followed engagement metrics. Unfortunately, these metrics can't tell the difference between my dad and my sister. They are a subsidy for bad taste, funded by good taste.
      </p>
 
      <h4 style={{marginTop: '10px'}}>Reason #2: Physics Envy</h4>
      <p>
        For most of human history, physics did not rely on math.
      </p>
      <p>
        Aristotle's physics was built on categories: heavy things fall because their natural place is the center of the earth, fire rises because its natural place is above. Objects had <i>tendencies</i> and <i>essences</i> rather than any sort of mathematical equation.
      </p>
      <p>
        Sometime in the 1600s, Galileo famously claimed that <a target="_blank" href="https://thonyc.wordpress.com/2010/07/13/the-book-of-nature-is-written-in-the-language-of-mathematics/">"the book of nature is written in the language of mathematics."</a> This was a radical view to hold at the time and <Ghost note={<>Part of why they disliked this comparison is because <a target="_blank" href="https://plato.stanford.edu/entries/galileo/#:~:text=4.1-,Mathematical%20Physics,-As%20the%20title">mathematics was seen as lower status work</a>. Mathematicians mainly did computations to help astronomers and engineers. They were not <i>great thinkers</i> like the Aristotelian physicists.</>}>most Aristotelian physicists pushed back on Galileo's ideas</Ghost>. They rebutted that math was about idealized abstractions (e.g. perfect circles, Pythagorean triples); but nature was messy and random. How could the two fields be related?
      </p>
      <p>
        Well, it turns out they are related. Deeply, deeply related. Discovering that the natural world is governed by precise mathematical laws revolutionized science. Fueled by this, physics has become (in my opinion) the most successful quantitative science.
      </p>
      <p>
        Every other field of study has been chasing the same sort of mathematical revolution. Economists build mathematical models of markets. Educators measure learning with standardized tests. Psychologists quantify personality with numerical scales. In these fields, we reason that if physics made progress by measuring things precisely, then <i>we</i> can make progress by measuring things precisely too. This phenomenon is called <a target="_blank" href="https://en.wikipedia.org/wiki/Physics_envy">physics envy</a>.
      </p>
      <p>
        <Ghost note={<>I shamelessly exploit this bias while writing this essay. Earlier, I wrote some formal definitions of optimization. Those definitions were correct, but completely irrelevant. I added them <i>specifically</i> so I could manipulate you by taking advantage of your physics envy. <br/><br/> Stop and think. Did you believe me more because I wrote that notation? If yes, then you may be susceptible to this bias.<br/><br/>That mathematical notation just repeated exactly what I said in English. It added nothing new to my argument.</>}>
          This bias has broken out of academia and ingrained itself into the public consciousness. There's a widespread, mostly unconscious belief that real knowledge is quantitative. That if we can't measure something, we don't really understand it. That the more precisely we can express a claim in numbers, the more true it is.
        </Ghost>
      </p>
      <p>
        This is a cognitive bias.
      </p>
      <p>
        Math is great, but it is not the only way to understand the world. In most cases, it is not the best way to understand the world. In many cases, it is a terrible way to understand the world.
      </p>
 
      <h4 style={{marginTop: '10px'}}>Reason #3: Quantities are easier and often good enough</h4>
      <p>
        Humans are lazy. Or maybe efficient. Whatever you want to call it.
      </p>
      <p>
        Sometimes we know a quantity is an imperfect approximation of our true goal, but we use it anyway because quantities are just ... easier.
      </p>
      <p>
        Numbers are fairly straightforward. They can be compared to other numbers. It takes only a few seconds to read a statistic. And only a few minutes to convert some raw data into a graph. They require far less thought and interpretation. Often, this is perfectly fine.
      </p>
      <p>
         If I am choosing between two apartments and one rents for $1,500 and the other rents for $3,000, I don't need to agonize over the qualitative differences between them. The price gap is large enough that the quantity dominates the decision.
      </p>
      <p>
        If I see a contractor who has 500 reviews with an average rating of 1.7 out of 5, that number is a good enough approximation for quality (or lack thereof) that I can probably move on to other options.
      </p>
      <p>
        As long as there is not a large gap between quantity and the quality, the approximation is sufficient. Why do the harder thing when the easy thing is good enough?
      </p>

      <h4 style={{marginTop: '10px'}}>Reason #4: Some things can actually be quantified</h4>
      <p>
        To Rajesh's credit, many things in software engineering can actually be quantified. We can genuinely compare algorithms based on their runtime, memory usage, energy consumption, and so on. We are not making any approximations when we do this. The number <i>is</i> the thing.
      </p>
      <p>
        Typically, this is what programmers mean when we say "optimization." And clearly, it was what Rajesh intended in his status message.
      </p>
      <p>
        And these scenarios are great! Software engineering does not suffer (much) from physics envy because our field is closely related to math. We get all the benefits listed above from being able to quantify metrics, mostly without tradeoffs.
      </p>
 
      <h2>What do people actually optimize (without quantities)?</h2>
      <p>
        Let's take a step back for a second. Earlier, I gave three examples of optimization from my family members. I chose them because they showcased how people optimize using quantities.
      </p>
      <p>
        I intentionally left out the examples of optimizations that rely on qualities:
      </p>

      <h4 style={{marginTop: '10px'}}>(4) Personal Preference</h4>
      <p>
        I have a favorite color. <Ghost note="Panda Express">A favorite restaurant</Ghost>. A favorite movie. A favorite song.
      </p>
      <p>
        When I say that blue is my favorite color, I am implicitly considering the set of all colors that I have seen and selecting the "best" one according to my preferences. This is, by definition, an optimization.
      </p>
      <p>
        I can't measure how much I like a color or a restaurant. There is no number which describes the way I feel when I see blue or purple or nacho cheese (a shade of yellow). <Ghost note={<>All we really need is a <a target="_blank" href="https://en.wikipedia.org/wiki/Partially_ordered_set">partial ordering</a> with a maximal element. Numbers not required.</>}>Yet, I am capable of having a favorite.</Ghost>
      </p>

      <h4 style={{marginTop: '10px'}}>(5) Strategic Leadership</h4>
      <p>
        In December 1776, George Washington's Continental Army was struggling. British troops had pushed him out of New York and then again out of New Jersey. His own soldiers were leaving in droves and their enlistment contracts expired at the end of the month. By every quantity available to Washington, the war was lost: he was outmanned, outgunned, undersupplied, and running out of time.
      </p>
      <p>
        If Washington were data-driven, he would have blamed his struggles on the lack of guns or troops. The rational course of action would have been to retreat, regroup, and try to get more resources.
      </p>
      <p>
        Instead, he attacked, famously crossing the Delaware River on Christmas night.
      </p>
      <p>
        In high school, we were taught that Washington understood the real problem with the American Revolution. The colonists were losing the war due to a lack of belief, not a lack of soldiers. His choice to attack was an optimization. He selected the course of action that would optimize for a quality: the morale of his troops.
      </p>
      <p>
        The victory at Trenton, New Jersey was small. America sent 2400 troops to defeat 1000 Hessian soldiers. But it reignited the spirit of the revolution and was the first domino in winning the war. No quantity could have told Washington to do what he did. He was evaluating something that only a quality could capture.
      </p>
 
      <h2>What is taste?</h2>
      <p>
        Taste is the ability to evaluate the <i>qualities</i> of something without reducing them to quantities. It is a trained sensitivity to quality that operates on the whole of a thing rather than on any individual measurable parts.
      </p>
      <p>
        When my sister watches a pilot and feels that something is off about it, she is exercising taste. She does not need a focus group. <Ghost note={<>Someone could argue that taste should be describable. In this scenario, they would see my sister's inability to describe her taste as a failure of communication.<br/><br/> I reject this. Taste is inherently tied to preference. And we have no reason to believe that preference is communicable. The greatest poets and writers could describe how a painting makes them feel. But I would never feel exactly the same way as them when seeing that painting and reading their work.</>}>She might not be able to tell you what is off. She might not be able to point to a single scene or line of dialogue. But she has developed a valuable mental model of quality that is richer and more nuanced than any set of quantities could capture.</Ghost> Her discomfort is information. It's just not quantifiable information.
      </p>
      <p>
        Programmers have this too. We often talk about how code can be "elegant" or "maintainable". These are not quantities. They are holistic judgments that require taste to make. Two implementations of an algorithm might have the same runtime, memory usage, and energy consumption, but one might be more elegant than the other. The more elegant one is better, even though we can't express that elegance as a number.
      </p>
      <p>
        Measurement allows us to evaluate quantities. Taste allows us to evaluate qualities.
      </p>
      <p>
        The key difference is that taste depends on the skill of the evaluator. Measurement is procedural: define what to measure, follow the process, read the number. Anyone with the same instrument gets the same result. But taste can be good or bad. Those with good taste can read qualities accurately and understand what they mean. Those with bad taste might misread qualities or be unable to interpret them at all. This is what makes taste harder to trust, but also what makes it more valuable when it is well-developed.
      </p>
      <p>
        Taste is also domain-specific. Having great taste in one area does not mean you have great taste in another. <Ghost note={<>Another cognitive bias called <a target="_blank" href="https://en.wikipedia.org/wiki/Nobel_disease">Nobel disease</a>. <br/><br/>Nobel laureates often make confident claims in fields they know nothing about. Their grasp of economics is extraordinary, but their taste in politics or medicine is often terrible.</>}>Some of the smartest people in the world have bad taste outside their area of expertise.</Ghost>
      </p>

      <h2>How can we develop good taste?</h2>
      <p>
        The good news is that humans develop taste automatically. If you are an expert in some field or have paid attention to something for a long time, you probably have good taste. 
      </p>
      <p>
        The better news is that you can develop your taste intentionally by thinking and observing. When you produce something, set aside time to sit with your feelings to evaluate how your creation feels. When you consume something, identify its qualities and compare it to other things.
      </p>
      <p>
        My sister didn't walk into Nickelodeon with perfect instincts about children's media. She developed those instincts over years of watching shows to observe what worked and what didn't. She considers how the shows make her feel and uses that to predict the impact on others.
      </p>
      <p>
        George Washington was only able to make his judgement call because he had spent so much time leading an army of volunteers. He thought deeply about the qualities of his troops and wrote about them extensively in letters to other generals. Through this, he developed the taste which allowed him to make the right call. 
      </p>
      <p>
        Everyone starts with bad taste. But it can be improved with experience, time, and intentionality. The more you practice excercising your taste, the better it gets.
      </p>

 
      <h2>The structural exclusion of taste</h2>
      <p>
        At the start, I claimed that our organizations are structured so that individuals ignore their taste.
      </p>
      <p>
        This was not always the case. For most of history, organizations were led by people who made decisions based on experience and judgment. The shift toward data-driven decision-making accelerated in the early 2000s. <a href="https://en.wikipedia.org/wiki/Moneyball_(film)">Moneyball</a> showed how the baseball scouts' taste for talent could be outperformed by statistics. Hedge funds demonstrated that quantitative models could beat human intuition in financial markets. Google built an empire on A/B testing everything. The message was clear: data beats gut feeling.
      </p>
      <p>
        And in many cases, it did. The data-driven revolution corrected real problems. Scouts <i>were</i> biased. Fund managers <i>were</i> overconfident. Product decisions <i>were</i> being made on the whims of the highest-paid person in the room. Quantitative methods brought rigor and accountability to fields that badly needed them.
      </p>
      <p>
        But the pendulum swung too far. What began as a useful corrective became an orthodoxy. <Ghost note={<>Ironically, I think this structure has also paved the way for AI to be a meaningful contributor to the workforce. It is unclear to me whether AI has good taste. But I think the rigid structures added for data-driven decision making make it easy for AI to plug in to existing systems and start contributing.</>}>Organizations didn't just add data to their decision-making process. They restructured themselves around it. Dashboards. KPIs. A/B test results. OKRs. These tools are useful. But they have a side effect: they leave no room for taste.</Ghost>
      </p>
      <p>
        Quantitative justification is legible, defensible, and transferable. A dashboard can be shown to a room full of people who know nothing about the domain and they will all nod along.
      </p>
      <p>
        Qualitative justification is none of these things. It is personal. It is risky. It requires trusting the individual making the call. It requires the people in the room to believe that the person standing in front of them has good taste, even though they have no way to verify this except by trusting their track record.
      </p>
      <p>
        So it got squeezed out. It's not that people in these organizations <i>choose</i> not to use their taste. It's that the structure <i>prevents</i> them from using it. There is no box on the form that says "my gut tells me this is good."
      </p>
      <p>
        Taste is a skill that must be practiced. This structural exclusion causes it to atrophy. The next generation of decision-makers never develops taste at all, because they weren't in an environment where it was exercised.
      </p>

      <h2>An entire world of examples</h2>
      <p>
        When I look around the world, I see this pattern everywhere. 
      </p>
      <p>
        Organizations are choosing to make decisions <i>solely</i> based on quantities, excluding taste from the process. This shields them from risk but also prevents them from reaching their true goal. Here are some examples:
      </p>
 
      <h4>Film</h4>
      <p>
        The goal of the film industry is to make money. The best way to do this is to make great films. In the 1970s, studios trusted their directors to do this. Coppola, Scorsese, Spielberg, and Lucas were given enormous creative freedom, and they used it to make some of the most celebrated films in history. <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_highest-grossing_media_franchises">Star Wars is a $46 billion institution.</a> The model worked because the studios were, in effect, betting on taste.
      </p>
      <p>
        The shift to data made sense. Betting on taste is risky. For every Star Wars, there were expensive flops that cost studios millions. Executives wanted a safer model, and they found one: franchise IP, sequels, and reboots are far more predictable at the box office than original films. <a target="_blank" href="https://www.hollywoodreporter.com/business/business-news/warner-bros-signs-deal-ai-driven-film-management-system-1268036/">AI platforms like Cinelytic now help "streamline" greenlight decisions.</a> The quantitative gauntlet does what it promises. <Ghost note={<>Inside Out 2<br/>Deadpool & Wolverine<br/>Moana 2<br/>Despicable Me 4<br/>Dune: Part Two</>}>Every one of the top five highest-grossing films of 2024 was a sequel.</Ghost>
      </p>
      <p>
        But the original Star Wars was not a sequel. Neither was The Godfather, or Jaws, or Toy Story. The franchises that studios are now milking for safe, predictable returns were all, at one point, risky bets on someone's taste. A system that only greenlights sequels will eventually run out of things to make sequels of. Only a handful of directors today (e.g. James Cameron, Christopher Nolan) still have the leverage to greenlight a film on the strength of their vision. Everyone else must survive the data. Ask the people around you what their favorite movie is. It probably won't be a box-office hit from the last five years.
      </p>

      <h4>Education</h4>
      <p>
        The goal of education is to prepare students for the real world. For most of the history of public schooling, we trusted teachers to do this. They had significant autonomy in their classrooms. They designed lessons around what they believed their students needed, adjusted in real time based on what they saw working and not working, and evaluated their own students' progress through direct observation. This was a system that relied on the taste of the people closest to the work.
      </p>
      <p>
        The shift to standardized measurement was a reasonable response to real problems. Teacher quality varied enormously. Some students were being failed by schools with no accountability. Standardized tests, graduation rates, and GPAs gave administrators and policymakers a way to identify struggling schools and allocate funding. These quantities brought transparency to a system that badly needed it.
      </p>
      <p>
        <a href="https://en.wikipedia.org/wiki/Goodhart's_law">But via Goodhart's Law, those quantities have become the system.</a> The average high school GPA has risen from 2.68 in 1990 to over 3.3 today. The numbers say students are doing better than ever. But talk to teachers and you hear something very different. They describe students who are more anxious, less curious, and less capable of working through difficulty than the students they taught a decade ago. A teacher who believes a program is life-changing or harmful to students, but can't show it in the numbers has no way to advocate for it. The quantities say everything is fine. <Ghost shift={-70} note="My mom is a teacher. My sister runs the Philadelphia school district. I occasionally lecture at the University of Washington. As a result, many of the people I interact with are educators in some fashion.">But <i>all</i> of the teachers I know say it is not.</Ghost>
      </p>

      <h4>Basketball</h4>
      <p>
        The goal of a basketball franchise is to make money, and franchises make money by having engaged fans. For decades, teams built fanbases by being <i>exciting</i>. The Showtime Lakers. The Jordan-era Bulls. The rivalry between the 90s Knicks and Heat. The best games were better because they had some immeasurable quality. <Ghost note={<>The New York Knicks have not won a championship since 1973 and barely made the playoffs between 2001 and 2020. <a target="_blank" href="https://en.wikipedia.org/wiki/Forbes_list_of_the_most_valuable_NBA_teams">Yet, they have been one of  the most valuable franchise in the NBA for the past few decades.</a></>}>How the game felt to watch was inseparable from the business.</Ghost>
      </p>
      <p>
        In the mid-2010s, Steph Curry changed the game. He showed that a historically great shooter could build an offense around 3pt shots and win championships with it. Which makes sense - the expected value for a 3pt shot is greater than a 2pt shot. When Curry did it, the game was thrilling, because he was doing something nobody else could do. But now, most teams have copied this statistically-optimal strategy to try and win.
      </p>
      <p>
        The problem is what the three-pointer takes away. Within the paint, players can make fadeaways, floaters, post moves, and be more physical. All of these things engage viewers. Meanwhile, a three-point offense is a perimeter game. There is less contact and variety. <Ghost note="Not everyone agrees with this. But it is a growing sentiment.">On its best night a three-point offense is unstoppable; on its worst it is unwatchable, and which night you get is closer to luck than strategy.</Ghost> The NBA's own surveys have shown <a target="_blank" href="https://www.espn.com/nba/story/_/id/44422379/too-many-3-pointers-why-nba-think-issue">growing fan frustration with this style of play</a>. But they dismissed fan concerns because there was not enough data to back up the claim that 3pt shots were ruining the game. 
      </p>

      <h4>Architecture</h4>
      <p>
        The goal of urban design is to build places where people want to live. For most of history, neighborhoods and cities were shaped incrementally by the people who inhabited them. Buildings were constructed by local builders who understood the climate, the culture, and the way people actually used space. The result was places like the historic quarters of European cities, the brownstone neighborhoods of New York, and the older residential districts that every city treasures.
      </p>
      <p>
        In the mid-twentieth century, modernist architects proposed a more rational approach. They wanted to optimize cities around measurable criteria: traffic throughput, housing units per acre, sunlight exposure, cost per unit. This made sense. Cities were overcrowded, housing was scarce, and the old methods were too slow to meet demand. Quantitative planning promised to solve real problems at scale.
      </p>
      <p>
        The result was <a target="_blank" href="https://en.wikipedia.org/wiki/Pruitt%E2%80%93Igoe">Pruitt-Igoe in St. Louis</a>, a housing project that satisfied every quantifiable criterion and was so miserable to live in that the city demolished it twenty years later. The quantities said it was well-designed: high density, adequate sunlight, efficient use of land. But the residents could feel what the metrics could not capture. People disliked how all of the buildings looked identical. Everything that makes a neighborhood feel alive had been left out. No quantifiable design process has ever replicated what taste, applied over time, produces naturally.
      </p>
 
      <h2>What I'm not saying</h2>
      <p>
        <Ghost note={<>I use many statistics and quantities in this article. I think the writing is more convincing because of their inclusion.</>}>I am not saying that we overvalue metrics.</Ghost>
      </p>
      <p>
        Metrics are great. We should collect more of them. They prevent mistakes. They reduce unnecessary risk. They hold people accountable. Every example I gave earlier (film, education, basketball, architecture) would have been <i>worse</i> if the people involved had no data at all. We should definitely keep measuring things.
      </p>


      <h2>What I am saying</h2>
      <p>
        I am saying that we undervalue taste.
      </p>
      <p>
        The problem is that we have let measurement crowd out every other form of evaluation. We encourage people to optimize for quantities, and we have no system for optimizing for qualities.
      </p>
      <p>
        I am worried about a generation of people who are not developing taste because the world they grew up in never asked them to.
      </p>
      <p>
        If you enter the workforce today, you are taught to justify every decision with data. You learn to run A/B tests, track KPIs, and build dashboards. These are useful skills. But nobody teaches you to sit with something and ask yourself whether it is good. Nobody teaches you to trust the discomfort you feel when something is off but you can't explain why. Nobody teaches you that this discomfort is <i>information</i>, and that learning to read it is a skill worth developing.
      </p>
      <p>
        Over time, this produces a world that is increasingly afraid of failure. And I understand why. It makes sense that a business would prefer consistent small profits over high-variance large ones. A sequel is safer than an original. A tested curriculum is safer than an experimental one. An optimized offense is safer than a creative one. If your job depends on not being wrong, you will choose the safe option every time.
      </p>
      <p>
        But as a society, we do not want this. The things we value most (the films we love, the teachers who changed our lives, the games we still talk about) were not produced by people optimizing for safety. They were produced by people who had developed taste, who trusted it, and who were given the room to act on it. A world that systematically prevents people from developing and exercising taste is a world that will produce fewer and fewer of these things.
      </p>
      <p>
        This is what I want to change. If you are a leader, build processes that accept qualitative justification alongside quantitative justification. Encourage your mentees to say "This feels better to me because of these aspects" and accept that as a legitimate input to decisions. And if you are early in your career, do not let your taste atrophy. Pay close attention to the things you work on. Develop your own sense of what quality looks like. Use metrics as a sanity check, not as a substitute for judgment.
      </p>
 
      <h2>Parting thoughts</h2>
      <p>
        I started this essay because Rajesh's quote bothered me and I couldn't explain why. But now I think I can.
      </p>
      <p>
        "Optimization without measurement is like shooting in the dark."
      </p>
      <p>
        The quote is entirely true in the domain Rajesh intended it: software performance. When you are choosing between two sorting algorithms, you <i>should</i> measure them. Your choice is not a matter of taste, but a matter of fact.
      </p>
      <p>
        But the quote becomes dangerous when you extend it beyond that domain. Because it implies that all optimization requires measurement. And that is not true.
      </p>
      <p>
        Every great film, every great building, every great school, every great product was shaped by someone who could tell the difference between good and excellent without a quantity to prove it. They were shooting in the dark, and yet they could see better than most of us.
      </p>
      <p>
        This ability to see in the dark is taste. And I am deeply worried that it is disappearing in the modern world.
      </p>
    </article>
  )
}