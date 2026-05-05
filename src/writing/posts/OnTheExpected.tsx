import styles from '@/writing/PostPage.module.css'
import Ghost from '@/writing/components/Ghost'
import QuoteBox from '@/writing/components/QuoteBox'

export default function OnTheExpectedPost() {
  return (
    <article className={styles.article}>
      <p>
        I've been turning a phrase over in my head for a few weeks: "expect the unexpected."
      </p>
      <p>
        People say it all the time - it is meant to be wise.
      </p>
      <p>
        The more I think about it, the more I find the advice unpalatable. And the reason starts with a joke about an elephant and a grape.
      </p>

      <h2>The elephant and the grape</h2>
      <p>
        In seventh grade, my best friend told me this joke:
      </p>
      <QuoteBox
        quote={<>What do an elephant and a grape have in common? <br/> <i>One of them is purple</i></>}
      />
      <p>
        We had found a website of "anti-jokes" and were taking turns reading them to each other. When it was his turn to read this one, I laughed so hard I couldn't breathe.
      </p>
      <p>
        <Ghost note="I probably don't remember the original memory exactly, but my brain can visualize a version of it still.">I still remember the confused look on his face.</Ghost> Despite my wheezing, he kept trying to ask me what was so funny as if he had missed some crucial part of the joke.
      </p>
      <p>
        He hadn't missed anything. I did not pick up on some hidden meaning or clever twist. It was just a question with a completely straightforward answer that happened to be funny <i>because it caught me off guard.</i>
      </p>
      <p>
        In retrospect, I realize it did so in two ways:
      </p>
      <p>
        <Ghost note="My brain was primed for this sort of question from years of rigorous middle school homework">First, the joke started in a familiar format: "what do X and Y have in common?"</Ghost> Usually, we answer this question with a single property shared by both X and Y <i>individually</i>. So when I heard the punchline, my brain stalled. The joke answered with a single property shared by X and Y <i>collectively</i>. An elephant is not purple. But it's true that when you have an elephant and a grape together, one of them is purple. Technically, this is a valid way to interpret the question so the joke subverted my expectations by exploiting a linguistic ambiguity.
      </p>
      <p>
        Second, the punchline of the joke was boring. We had been reading dozens of "anti-jokes" moments before and all of the jokes had ridiculous and unexpected punchlines.
      </p>

      <QuoteBox
        quote={<>What's white and annoying at breakfast? <br/> <i>An avalanche.</i></>}
      />
      <QuoteBox
        quote={<>What's yellow and hurts if it gets in your eyes? <br/> <i>A bulldozer</i></>}
      />
      <QuoteBox
        quote={<>Why did John drop his ice cream? <br/> <i>He was hit by a bus</i></>}
      />      
      <p>
         <Ghost note="Many of the jokes were even more offensive than these ones. The shock factor was hilarious to our middle school brains. I purposefully did not include those here. But you can imagine the stark contrast between those sorts of jokes and the elephant-and-grape one.">I was primed for something outlandish and imaginative.</Ghost> So when this punchline was <i>boring</i>, it was a second shock to my system.
      </p>
      <p>
        This became my favorite joke for years.
      </p>
      <p>
        My best friend noticed something about this joke that I did not realize until I began writing this essay. It wasn't the punchline of the joke that mattered - it was the setup. 
      </p>
      <p>
        Once I had heard the full joke, he never needed to finish it again. Whenever we got bored of what we were doing, a sly look would appear on his face and he would ask me "What do an elephant and a grape have in common?"
      </p>
      <p>
         I would fall apart before he could say the answer.
      </p>
      
      <Ghost note="It has been over ten years. He still tries it every now and then, but I am largely immune. His weapon has fizzled and the most he can get out of me is a cheeky grin.">
        <p> 
          To my chagrin, he deployed this weapon during recess, at lunch, and even when I was talking to other people. His weapon had a 100% casualty rate against its intended audience (me). 
        </p>
      </Ghost>
      <p>
        I didn't have the vocabulary to explain why this joke was so effective until much later, when I came across a theory that put a name on what was happening inside my head.
      </p>

      <h2>The incongruity theory</h2>
      <p>
        When I'm bored, I sometimes look up random topics on <a target="_blank" href="https://plato.stanford.edu/">Stanford's Encyclopedia of Philosophy</a>. I had been reading a book about the history of comedy so I decided to look up theories of humor. 
      </p>
      <p>
        Turns out that philosophers have been arguing about why we laugh for centuries. There are a lot of hypotheses, <Ghost note="Old philosophers could really just say whatever they wanted, huh? Was humor different back then? Has it evolved causing a shift in our philosophical justification?"> although a majority of them are obviously bullshit</Ghost>. But one explanation stood out: <a target="_blank" href="https://en.wikipedia.org/wiki/Theories_of_humor#Incongruity_theory">the incongruity theory of humor</a>. The core claim is that we laugh when something subverts our expectations.
      </p>
      <p>
        Philosophers don't explain why this mechanism exists, they only observe it. But folks who study child development have some theories. Children know virtually nothing about the world and have relatively few animal instincts. Evolutionarily, it makes sense that we would have a strong positive response to that surprise so that they are motivated to explore the world.
      </p>
      <p>
        This matches my own experience with children. My niece and nephew have just learned to speak and know very little about the world. But they are constantly happy and are far more comfortable navigating new scenarios than me (as long as they can see my sister or her husband). 
      </p>
      <p>
        Regardless of its origins, I think the incongruity theory is sound. It asserts that every joke has two parts. First, a setup that builds an expectation, i.e. a pattern your brain latches onto and starts running forward with. Second, a punchline that breaks the pattern. The laughter is just your brain's natural response to the incongruity.
      </p>
      <Ghost note="There are other theories. Superiority theory says we laugh to feel dominant over others. Relief theory says laughter releases nervous energy. Both of these feel true for specific kinds of humor.">
        <p>
          The elephant-and-grape joke is a textbook case. Setup builds a pattern (anti-jokes have shocking answers). Punchline destroys it (this one doesn't). Naturally, my demise followed in the form of endless laughter.
        </p>
      </Ghost>

      <p>
        This structure isn't unique to my favorite middle school joke. In fact, I am starting to agree that it might be the structure of <i>every</i> joke, including really bad ones.
      </p>

      <h2>The infamous chicken</h2>
      <p>
        "Why did the chicken cross the road?" first appeared in print in March 1847 in an edition of "The Knickerbocker", a New York monthly magazine. It is probably the most famous joke in the English language, in part, because it is widely considered to be unfunny.
      </p>
      <p>
        But this was not always true. When it was first published, it killed in the comedy circles. And the reason it was hilarious is because it is was such a direct anti-joke.
      </p>
      <p>
        The format "why did X do Y?" sets up a specific expectation. Listeners anticipate a clever reason or a twist. "To get to the other side" is the most boring, straightforward answer imaginable. It is technically correct and completely devoid of wit. And that's the whole point of the joke.
      </p>
      <Ghost note={<>One article I read said "the other side" is actually a reference to death - the chicken crosses the road into traffic and reaches "the other side" as in the afterlife. I genuinely have no idea if this is true.</>}>
        <p>
          The chicken joke and the elephant joke are doing the same thing. They are both funny precisely because they violate the contract that the format establishes with the listener.
        </p>
      </Ghost>
      <p>
        But if the chicken joke is such a masterpiece, then why don't people find it funny anymore?
      </p>
      <p>
        I think it is because the joke became so popular and so familiar that folks forgot why it was funny in the first place. The first person who heard it in 1847 laughed because "to get to the other side" shattered their expectation. <Ghost note="I like to think that I was exactly the billionth person to hear this joke. Nobody can prove otherwise.">The billionth person</Ghost> who heard it didn't laugh because there was no expectation left to shatter. The joke had been repeated so many times that the standard answer <i>became</i> the expectation. 
      </p>
      <p>
        Now, people make variations of the chicken joke that are funnier than the original. These variations are all at least mildly funny because people expect to hear the original punchline. Every variation ends up as a subversion of its own. 
      </p>
      <p>
        This, I think, reveals the mechanism underneath all humor. Every joke depends on building an expectation and then breaking it. 
      </p>
      <ul>
        <li>Puns set up one meaning of a word and then swap it for another.</li>
        <li>Observational comedy describes a familiar situation and then reframes it in a way you hadn't considered.</li>
        <li>Slapstick sets up physical expectations (e.g., that person is going to keep walking) and then violates them (they walk into a pole).</li>
        <li>Anti-jokes catch the audience by surprise with a shocking punchline that is unrelated to the premise</li>
      </ul>
      <p>
        <Ghost note="I added this sentence because it feels wrong to end a section with a bullet point.">So yeah. This is a sentence.</Ghost>
      </p>

      <h2>Personal Reflections</h2>
      <p>
        Over the years, many of my friends had commented on a particular character trait of mine. It is something I was not able to articulate until recently. I am not a <i>curious</i> person, but I am a <i>questioning</i> one.
      </p>
      <p>
        When I see a biker, a dozen thoughts instantly pop into my mind: where are they going, are they late for something, did they build their own bike, is that bike their favorite color, how often have they ridden without a helmet, do they have biking friends, etc... 
      </p>
      <p>
        Fundamentally, <i>I do not care</i> about the answers to these questions. They simply materialize within my mind and quickly fade away. I do not think these questions are important or interesting. I'm certainly not trying to learn something from them. But I do think of them.
      </p>
      <p> 
        Like most people, my mental model of the world is shallow. It must be because nobody can know everything. And by definition, one's mental model specifies their expecatations. So I <i>expect</i> the world to be shallow, even though intellectually I know it is not.
      </p>
      <p>
        So when I ask a question about something that I expect to have no interesting answer for, I am usually surprised to discover that the world has higher fidelity than I thought. And that surprise turns into delight.
      </p>
      <p>
        To be clear, this is not an metaphor. I am not saying that learning is <i>like</i> humor, or that it has a <i>similar</i> structure, or that the two are <i>analogous</i>. I am saying that when I discover something that breaks my model of the world, the experience is <i>actually</i> funny.
      </p>
      <p>
        I can only make this claim for myself, but I really don't think I am alone in feeling this way. I suspect that many of my friends who enjoy learning share this process. Try thinking about the last time someone told you a fact that genuinely blew your mind. Did you laugh? We usually chalk it up to surprise or disbelief. I think the laughter is telling us something real about what's happening underneath.
      </p>

      <h2>A choice</h2>
      <p>
        In Mr. Wiedemann's seventh grade science class, I had a reputation. Unfortunately, it was not the cool kind. I would hear something interesting in a lecture, ask a question about it, hear something interesting in the answer, ask another question about that, and then thirty minutes later class would be over and we hadn't gotten to the worksheet. My classmates thought I was running an elaborate time-wasting operation. They made so much fun of me for it that I started pretending they were right - it was easier to be the kid who was cleverly wasting time than the kid who was so engrossed in asking questions that he couldn't stop.
      </p>
      <p>
        Eventually Mr. Wiedemann moved me to the back of the room and banned me from asking questions. For the sake of the class, it was probably a good pedagogical decision.
      </p>
      <p>
        I did not ask those questions because I wanted to waste time, <Ghost note="Learning was a fortuitous side effect">or even to learn</Ghost>. But because it was enjoyable to discover that my questions had answers.
      </p>
      <p>
        I haven't lost this personality trait. Earlier this year, I went to a three-star Michelin restaurant in Rome with my friends. Occasionally, the staff would interrupt our group conversation to introduce us to the next course and answered questions we had about it. We learned how the plates were sourced from a specific artisan in Italy. How the painting on the wall had not changed in decades. And a lot about the food. I was having a wonderful time. But at some point, I noticed my friends were laughing at me. They thought I was asking the staff a lot of dumb questions and making a fool of myself. Of course, they enjoyed seeing me do this and encouraged me to keep going.
      </p>
      <p>
        It was seventh grade all over again. Just like middle school, I played into it a bit more once I realized I had an audience.
      </p>
      <p>
        <Ghost note="This is frequently a bad thing. It is selfish to prioritze my enjoyment over others. When my friend breaks up with their partner, I'm sure they do not want to hear a hundred questions about their feelings and the cause of their breakup just so I can explore my mental model of their relationship">Here's the thing I've come to accept. Although people have made fun of me, I enjoy asking my questions too much to stop.</Ghost> My willingness to ask might be embarrassing, or awkward, or unimportant to anyone but me. But I have genuine fun. And all of my friends came out of that dinner having learned a tiny bit more about our world.
      </p>
      <p>
        I have decided that I like this about myself. It may be one of my best qualities; it is certainly a defining one. 
      </p>
      <p>
        Anyway, that brings me back to the phrase I have been mulling over.
      </p>

      <h2>Expect the expected</h2>
      <p>
        "Expect the unexpected" is advice that sounds wise because it promises safety. If you can anticipate everything, nothing can hurt you. Nothing can throw you off balance.
      </p>
      <p>
        But the implication is that being thrown off balance is bad. And I don't believe that. Being thrown off balance is the precondition for both humor and learning. The gap between what I expected and what I got is where every joke lives and where every genuine insight comes from. If I closed that gap (i.e. if I truly expected the unexpected), I would be eliminating the possibility of both.
      </p>
      <p>
        I would never laugh at a joke, because I would have already anticipated the punchline. And I would never find learning funny, because nothing would violate my mental model of the world. I would be <i>perfectly</i> prepared and <i>completely</i> bored.
      </p>
      <Ghost note={<>There's a funny paradox here. <br/><br/> When someone reminds you to "expect the unexpected", it is because you have recently encountered an unexpected thing. If you had heard the advice before encountering the unexpected thing, then that same thing would not have been unexpected. <br/><br/> It follows that the phrase itself is always used in unexpected ways.</>}>
          So I am choosing the opposite. 
      </Ghost>
      <p>
        As much as possible, I would only like to expect the expected. I hold onto my mental models and let them be stable and predictable and often wrong. I walk into conversations assuming I know how things work. And then, when someone breaks that assumption, I get to do my favorite thing: laugh.
      </p>
      <p>
        It's the same feeling my best friend gave me in seventh grade when he whispered the setup to a terrible joke in my ear in the middle of lunch.
      </p>
      <p>
        The world is full of punchlines. I truly hope that I will not see them coming.
      </p>
    </article>
  )
}
