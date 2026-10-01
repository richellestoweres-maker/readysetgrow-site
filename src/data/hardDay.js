/**
 * Ready Set Grow: The Night A Day Was Hard
 * ------------------------------------------------------------------
 * Her ask, and she described the exact moment it was missing:
 *
 *   "when people fill in the how today ends, like I just filled in
 *   Stetson's talking about how he had a bad day essentially, and I
 *   would have liked for Willow to pop up in the corner maybe seeing
 *   if I wanted to talk about it. Maybe ask what happened and give
 *   reassurance and guidance and a teaching moment for mom."
 *
 * WHAT WAS THERE ALREADY was a written line inside the check in card.
 * Better than nothing and not what she meant. She had just told the
 * app that her son had a bad day, and nothing came out to meet her.
 *
 * SO WILLOW COMES OUT. Not with advice first, which is the wrong order
 * at 8pm, but with one true steadying thing and then a real question.
 * She asks what happened, and then she listens.
 *
 * WHAT IS IN EACH ENTRY
 *   card      what the corner says on its own, because most parents
 *             will read this and nothing else, so it has to carry.
 *   opening   what Willow actually says when the chat opens. It names
 *             the specific thing, says something true about it, and
 *             asks 1 open question. Written rather than generated, so
 *             it is instant and so it is the same whether or not the
 *             model is reachable tonight.
 *   likely    what is often going on underneath, as possibilities
 *             rather than as a verdict about this child.
 *   tonight   things doable in the next 2 hours by somebody with
 *             nothing left. The bar is lowered on purpose. Skipping
 *             the bath is allowed and it says so.
 *   tomorrow  1 small change, never a new regime.
 *   teaching  the part she asked for by name. Not a tip, a piece of
 *             understanding that makes tonight make more sense.
 *
 * THE ONE THAT IS NOT ABOUT THE CHILD. Some parents filling this in at
 * the end of a bad day are not having a hard parenting day, they are
 * at the end of themselves. CRISIS_DOOR opens quietly, once, and does
 * not treat a merely tired parent as a case.
 */

export const HARD_DAY = {
  general: {
    card: 'A hard day is a hard day, not a verdict on how you are doing. You got to the end of it, '
      + 'and the fact that you stopped to write it down at all says something about how much you '
      + 'care. Tomorrow starts from zero, not from today.',
    opening: 'One of the hard ones. Those days have a way of convincing you that you are the only one '
      + 'having them, and you are not. Most of what made today hard was probably not anything you '
      + 'did. What part of it are you still carrying?',
    likely: [
      'Something small set the tone early, such as a rough wake up or a rushed morning, and '
        + 'the whole day ran downhill from there',
      'Everybody in the house was low on sleep, food, or downtime, and that tends to show up '
        + 'as friction rather than as tiredness',
      'Nothing specific happened and the day was just hard, which happens far more often than '
        + 'anyone admits out loud',
    ],
    tonight: [
      'Pick one thing off tonight\'s list and drop it. Bath, teeth, reading, pajamas instead '
        + 'of a real change of clothes. Nobody will remember.',
      'Get yourself something to eat or drink that you actually like, before you start the '
        + 'bedtime push rather than after.',
      'If you want to reset the tone, sit on the floor near them for 5 minutes without '
        + 'mentioning the day. Being close does most of the work.',
    ],
    tomorrow: [
      'Protect the first 20 minutes of the morning. Lay out clothes and pack the bag tonight '
        + 'so the day does not open with hurrying.',
      'Put one thing you are actually glad about on tomorrow, even if it is small and only 10 '
        + 'minutes long.',
    ],
    teaching: 'Here is something about how memory works that matters tonight. People rate a whole '
      + 'experience mostly by its worst moment and by how it ended, not by the average of it, '
      + 'which is why a day with 3 fine hours and 1 terrible bedtime files itself in your head as '
      + 'a bad day. Your child\'s day almost certainly had more neutral and ordinary in it than '
      + 'you can reach right now, and so did yours. This is not a reason to talk yourself out of '
      + 'how it felt, because it did feel bad. It is a reason not to trust the summary your tired '
      + 'brain is writing tonight about who you are as a parent.',
  },
  adhd: {
    card: 'Days where nothing lands anywhere are exhausting to be near, and being worn out by it '
      + 'does not mean you were short on patience. A body that cannot settle is not choosing '
      + 'that. You spent all day being the outside structure for a brain that could not make its '
      + 'own.',
    opening: 'Could not land anywhere. Those days ask you to be the brakes for somebody else for 12 '
      + 'hours straight, and that is a real job even though nobody names it. What did it look '
      + 'like today, the bouncing, the shutting down, or both?',
    likely: [
      'The demands stacked up faster than the settling could happen, so each transition '
        + 'started before the last one had finished',
      'Short sleep the night before, or a day light on movement, can make focus much harder '
        + 'in a way that looks like it came out of nowhere',
      'Something more interesting was available somewhere else. Attention here tends to '
        + 'follow interest and urgency rather than importance',
    ],
    tonight: [
      'Trade quiet for movement. 10 minutes of something physical, such as jumping, carrying '
        + 'something heavy, or a lap around the yard, settles a revved up body faster than being '
        + 'told to calm down.',
      'Cut the bedtime routine to 3 steps and say them out loud in order. Fewer instructions '
        + 'land better than more.',
      'Let yourself be done. You do not have to have a conversation about today tonight.',
    ],
    tomorrow: [
      'Pick the single worst transition of today and put movement right before it instead of '
        + 'right after it.',
      'Give one instruction at a time tomorrow, delivered up close rather than across a room.',
    ],
    teaching: 'ADHD is not really a shortage of attention, it is difficulty pointing attention on '
      + 'purpose, which is why the same child who cannot sit through 4 minutes of homework can '
      + 'lose 90 minutes to something that grabs them. That gap gets read as choosing, and it is '
      + 'not, because the systems that respond to interest and urgency have already answered '
      + 'before anybody decides anything. The part worth holding tonight is what follows from '
      + 'that, which is that staying pointed at boring things is effortful work, it has been '
      + 'running since breakfast, and it runs out. So today was very likely not a day your child '
      + 'got worse, it was a day the fuel for steering ran low earlier than usual.',
  },
  autism: {
    card: 'When most of a day is too much, it is usually not one big thing, it is 40 small things '
      + 'with no gap between them. Coming home and falling apart is a sign that home is the safe '
      + 'place, not a sign the day was handled wrong. You absorbed a lot today.',
    opening: 'Too much, most of it. Days like that are usually cumulative rather than caused by one '
      + 'event, which is exactly why they are so hard to explain to anybody who was not there. '
      + 'Was there a point where you could feel it tipping, or did it just build?',
    likely: [
      'Sensory and social input added up across the day with no real recovery in between, so '
        + 'the last thing became the thing that broke it even though it was small',
      'The day was less predictable than usual, such as a substitute teacher, a schedule '
        + 'change, or a plan that shifted',
      'They held it together somewhere else all day and then arrived home with nothing left '
        + 'to hold it with',
    ],
    tonight: [
      'Turn things down rather than adding something calming. Lights lower, fewer voices, no '
        + 'questions about the day.',
      'Let the food be the safe food and the clothes be the soft ones. Tonight is not the '
        + 'night for range.',
      'Skip the bath. Undressing, water temperature, and being told to hurry are three '
        + 'demanding things in a row at the worst hour.',
    ],
    tomorrow: [
      'Build one deliberate gap into tomorrow, placed right after whatever the loudest part '
        + 'of the day is.',
      'If something changed today that you knew about in advance, try telling them the night '
        + 'before rather than the morning of.',
    ],
    teaching: 'The thing that makes these days so confusing is the delay. Load accumulates over hours, '
      + 'but the collapse arrives at the end and attaches itself to whatever happened to be last, '
      + 'so you end up analyzing the wrong moment. The dropped cup at 6pm was not the cause, it '
      + 'was the receipt. Many autistic children also process internal body signals differently, '
      + 'so hunger, thirst, needing the bathroom, or being too hot can climb for a long time '
      + 'without ever registering as a nameable feeling, and then arrive as everything being '
      + 'unbearable. That is a large part of why food, water, and a quieter room do more at this '
      + 'hour than any conversation will.',
  },
  pda: {
    card: 'A day where every ask turned into a no is one of the loneliest days in parenting, '
      + 'because ordinary requests start to feel like picking fights. The no is about the '
      + 'pressure, not about you. Nothing about today means you ask too much of your child.',
    opening: 'Everything was a no. When ordinary asks start landing like threats, it stops being about '
      + 'the shoes or the teeth and becomes about who is in charge of this moment. That is a hard '
      + 'day to be the one asking. What was the ask where it really locked up?',
    likely: [
      'Control felt scarce today, maybe because something bigger got decided for them, so the '
        + 'small asks became the only place left to push back',
      'The pressure was in the phrasing more than in the task. A direct instruction can land '
        + 'much harder than the same thing offered sideways',
      'Anxiety was running underneath all of it, and refusal is often what anxiety looks like '
        + 'when it cannot say that it is scared',
    ],
    tonight: [
      'Stop asking for the rest of the night. Narrate instead of requesting, such as I am '
        + 'going to go run the water, rather than go get in the bath.',
      'Drop every ask that is not essential. Teeth can be a wipe, dinner can be a snack on '
        + 'the couch, clothes can stay on.',
      'Offer one real choice about something that does not matter to you, so the night has a '
        + 'yes in it somewhere.',
    ],
    tomorrow: [
      'Pick one recurring ask and change only the wording. Try I wonder if, or a choice '
        + 'between 2 options, instead of a direct instruction.',
      'Decide in advance which 2 things genuinely have to happen tomorrow, and let everything '
        + 'else be negotiable.',
    ],
    teaching: 'Demand avoidance looks like defiance and behaves like fear. When a request registers as '
      + 'a loss of control, the body treats it as a threat, and a threatened nervous system does '
      + 'not stop to weigh whether the request was reasonable, it just gets out. That is why '
      + 'repeating yourself louder goes nowhere, and why the identical task can be completely '
      + 'fine when it becomes their idea 10 minutes later. It also explains something that feels '
      + 'backwards, that dropping the demand often gets the thing done sooner than holding the '
      + 'line does, because the pressure was the obstacle rather than the task. None of this '
      + 'means you can never ask for anything. It means asking is a skill with technique to it, '
      + 'and most of the technique is leaving room.',
  },
  communication: {
    card: 'Not being understood all day is frustrating for them and quietly draining for you, '
      + 'because you spent the day translating. The guessing you did today was work, even though '
      + 'it does not look like work from the outside. Getting it wrong sometimes is part of the '
      + 'job, not a failure at it.',
    opening: 'Being understood did not go well today. Both sides of that are tiring, the trying to say '
      + 'it and the trying to catch it, and the frustration usually lands hardest on whoever '
      + 'loves them most. Where did it break down worst today, out in the world or at home with '
      + 'you?',
    likely: [
      'The message was there the whole time and the route out was blocked, which tends to '
        + 'come out as anger rather than as sadness',
      'Being tired makes language harder, so afternoon and evening communication is often '
        + 'noticeably worse than morning',
      'Somebody today answered the behavior instead of looking for the message underneath it, '
        + 'and that happens to everybody, you included',
    ],
    tonight: [
      'Drop to yes and no questions for the rest of the night. Less precision, less pressure, '
        + 'more success.',
      'Point, show, gesture, and let them lead you to things. Getting understood by any route '
        + 'still counts fully.',
      'Name what you think they felt today rather than asking them to explain it. I think '
        + 'today was frustrating is much easier to agree with than a question is to answer.',
    ],
    tomorrow: [
      'Pick the one moment of the day that reliably breaks down and put something visual into '
        + 'it, such as a picture, a photo on your phone, or a written list.',
      'Leave a long pause after you ask something tomorrow. Longer than feels natural, closer '
        + 'to 10 seconds.',
    ],
    teaching: 'For most children, understanding runs ahead of speaking, sometimes by a wide margin, and '
      + 'that gap is where the hardest days live. A child can know precisely what they want, hold '
      + 'the entire thought, and have no working route to get it out, which is closer to being '
      + 'locked out of your own house than to not having the words. When the route is blocked the '
      + 'message comes out through the body instead, which is why hitting, dropping to the floor, '
      + 'and slamming doors are not separate from the communication problem, they are the '
      + 'communication. It also helps to know that speaking is the slowest of the language skills '
      + 'to arrive and the first to fall apart when someone is tired, which accounts for most of '
      + 'why evenings look like this.',
  },
  speech: {
    card: 'Days when the words will not come out right are demoralizing for both of you, and your '
      + 'patience today mattered more than any correction would have. Speech is a motor skill, '
      + 'and motor skills have bad days. Nothing about today undid any progress.',
    opening: 'Speech was rough today. What rarely gets said is that talking is physical work, so on a '
      + 'tired day the mouth is as tired as everything else, and that is not a slide backward. '
      + 'Was it a particular word, or was it everything, or was it other people not catching it?',
    likely: [
      'Fatigue reached the fine motor control that speech runs on, and speech is often the '
        + 'first thing to go when a body is worn out',
      'A stretch of not being understood made them go quieter, which then looks like less '
        + 'speech rather than less willingness to risk it',
      'They reached for something harder today, a longer sentence or a newer sound, and '
        + 'harder attempts come with more misses',
    ],
    tonight: [
      'Stop correcting for the night. Say back what you heard in the right form, without '
        + 'asking them to try it again.',
      'Let the communicating be easy. Gestures, pointing, a word they already own, whatever '
        + 'gets there fastest.',
      'If they went silent, sit with them rather than drawing them out. Silence is allowed to '
        + 'be how a day ends.',
    ],
    tomorrow: [
      'Pick one low pressure time, such as in the car or in the bath, and just talk together '
        + 'with nothing to practice.',
      'Skip the audience. If a relative usually asks them to say something, run interference '
        + 'tomorrow.',
    ],
    teaching: 'Speech is the most complicated motor task most people ever learn, coordinating roughly '
      + '100 muscles in sequence for something as ordinary as asking for juice. Because it is '
      + 'motor, it obeys motor rules, which means worse when tired, worse under pressure, worse '
      + 'with an audience, and better when the task is familiar. That is why a word available at '
      + '8am has gone by 6pm, and it is not the word being lost. One more piece matters more than '
      + 'it should. How a listener reacts changes how much a child is willing to risk next time, '
      + 'so the face you make when you do not catch it is doing more for tomorrow\'s talking than '
      + 'any practice at this hour could.',
  },
  selectiveMutism: {
    card: 'Watching your child go silent where they need their voice is painful, and the fact that '
      + 'they talk freely with you is not a small thing, it is the proof that the voice is there. '
      + 'Today was not rudeness and it was not anything you did. Silence is what fear looks like '
      + 'from the outside.',
    opening: 'The silence was bad today. The part most people miss is that this is not choosing not to '
      + 'talk, it is not being able to, which is why pressure tightens it rather than loosening '
      + 'it. Where did it happen today, and who was there when it did?',
    likely: [
      'The setting was new, or the expectation to speak was direct, and a direct expectation '
        + 'is the single hardest version of this',
      'Somebody waited and then filled the silence in for them, which lowers the panic right '
        + 'now and makes the next one slightly harder',
      'Something well meant added pressure without anyone intending it, such as a reward '
        + 'promised for speaking or an audience gathering to listen',
    ],
    tonight: [
      'Home is where the voice works. Let them talk about nothing for a while and do not '
        + 'steer it toward today.',
      'Do not debrief the silence tonight. Questions about why they did not talk are the same '
        + 'pressure in a kinder voice.',
      'If you need to say anything, say you saw that it was hard and that you are not upset. '
        + 'That is the whole message.',
    ],
    tomorrow: [
      'If somebody will ask them a question tomorrow, ask that person to wait 5 seconds and '
        + 'then move on, without rescuing and without repeating.',
      'Set up one low stakes exchange where a nod or a pointed finger counts as a complete '
        + 'answer.',
    ],
    teaching: 'Selective mutism is an anxiety condition, and the old name for it, elective mutism, did '
      + 'real damage by putting a choice where there is not one. There is no evidence linking it '
      + 'to trauma or to anything that happened at home, and it is not shyness that reliably gets '
      + 'outgrown on its own. The thing worth knowing tonight is what pressure does, because '
      + 'pressure to speak is the single most paralyzing thing for a child in this position, '
      + 'which makes every instinct you have at the door of a birthday party exactly backwards. '
      + 'What actually loosens it is lowering the demand and then leaving a real gap, 5 seconds '
      + 'or more, which feels unbearably long to an adult and is about how long the words need. '
      + 'Progress here comes in small graded steps, and it is normal for it to look like nothing '
      + 'for a while and then move.',
  },
  auditoryProcessing: {
    card: 'A day of missing what was said is not a day of not listening, and that difference '
      + 'matters more than anything else you could know tonight. Hearing and understanding are '
      + 'two separate jobs, and only one of them was working well today. Repeating yourself 6 '
      + 'times was not a patience problem on your end.',
    opening: 'Rough day for catching what was said. The hearing itself works fine and the decoding is '
      + 'what struggles, which is why a quiet room and a noisy one are two different worlds for '
      + 'the same child. Was today loud, or was it more that instructions kept getting lost?',
    likely: [
      'Background noise was higher than usual, and understanding speech in noise costs far '
        + 'more mental effort than understanding it in quiet',
      'Instructions came in strings today, and multi-step directions fall apart much faster '
        + 'than single ones when decoding is already slow',
      'They filled a gap with a guess and the guess was wrong, which reads as not listening '
        + 'or not caring when it is neither',
    ],
    tonight: [
      'Kill the background. Turn off the TV or the music before you say anything you need '
        + 'them to actually get.',
      'One instruction at a time, face to face, and then wait. The pause is where the '
        + 'decoding happens.',
      'Show rather than tell where you can. Hand them the toothbrush instead of asking them '
        + 'to go brush their teeth.',
    ],
    tomorrow: [
      'Pick your busiest moment tomorrow and make it visual. A list, pictures, or pointing, '
        + 'instead of talking across a room.',
      'Get their eyes before you start the sentence rather than partway through it.',
    ],
    teaching: 'Following speech in a noisy room is not passive. It takes active mental work to pull a '
      + 'voice out of background sound and rebuild the parts that got lost, and that work draws '
      + 'from the same limited pool your child needs for remembering, behaving, and holding it '
      + 'together. Researchers call this listening effort, and it means a child can understand a '
      + 'sentence perfectly and still be depleted by the effort of having understood it. It is '
      + 'why a classroom with fans, chairs, and 20 other kids can produce a child who arrives '
      + 'home wrung out with nothing obvious to point at, and why a 6th repetition in a loud '
      + 'kitchen gets you less than a 1st one in a quiet room. There is an odd side effect too. '
      + 'Decoding takes an extra beat, so the reply comes an extra beat late, and that delay gets '
      + 'read as ignoring you.',
  },
  sensory: {
    card: 'A day where everything felt wrong on the skin is genuinely hard to live inside, and '
      + 'there was no version of today you could have managed into being smooth. Sensory '
      + 'overwhelm is not a mood and it does not respond to reasoning. You kept them company '
      + 'through it, which was the actual job.',
    opening: 'Sensory day, and a bad one. These days accumulate rather than happen, which is why there '
      + 'is often no single thing to point to and why the last small thing gets blamed for all of '
      + 'it. What tipped it over, or was it just too much of everything?',
    likely: [
      'The load stacked all day with no real gap, so by evening ordinary input such as a tag, '
        + 'a smell, or a sibling\'s voice was arriving at full volume',
      'Something in the environment was different, such as new clothes, a new soap, a louder '
        + 'room, or a change in the weather',
      'They were seeking rather than avoiding today, crashing and squeezing and jumping, '
        + 'because the body was hunting for input it was not getting',
    ],
    tonight: [
      'Subtract, do not add. Lights down, sound off, fewer people in the room. Removing input '
        + 'works faster than any calming activity.',
      'Deep pressure if they like it, such as a heavy blanket, a firm hug, or being squished '
        + 'between cushions. Skip it entirely if they do not.',
      'Skip the bath. Undressing, water temperature, and a towel are three sensory events in '
        + 'a row at the worst possible hour.',
    ],
    tomorrow: [
      'Put one sensory break before the hardest part of the day rather than after it.',
      'Change one input you control, such as the tag in the shirt, the soap, or the noise '
        + 'level at dinner, and watch whether it moves anything.',
    ],
    teaching: 'Sensory thresholds are not fixed. How much a child can take in before it becomes too '
      + 'much drops as the day goes on, and drops faster after short sleep or a light lunch, '
      + 'which means the shirt that was fine this morning genuinely feels different at 7pm rather '
      + 'than them having decided to mind it. Sensory overwhelm is also processed as alarm rather '
      + 'than as discomfort, so the body is in a threat state, and explaining that the sound is '
      + 'harmless goes to a part of the brain that is not taking calls right now. The practical '
      + 'consequence is counterintuitive. Adding something soothing usually does less than taking '
      + 'something away. And the child who seeks intense input, the crasher and the squeezer, is '
      + 'running the same system as the one who avoids it, just approaching it from the other '
      + 'side.',
  },
  motor: {
    card: 'Days where the body will not cooperate are frustrating in a way that is hard to watch, '
      + 'and the frustration you saw was about the gap between what they meant to do and what '
      + 'actually happened. Movements that are not automatic yet cost real energy. Today cost a '
      + 'lot of it.',
    opening: 'The body was not cooperating today. When a movement is not automatic yet, every attempt '
      + 'takes genuine concentration, so a day of buttons and stairs and handwriting is closer to '
      + 'a day of hard mental labor than it looks. What was the thing that got to them most?',
    likely: [
      'Plain fatigue, because movement that is not automatic burns through attention and '
        + 'energy much faster than practiced movement does',
      'Something today was public, such as writing in front of the class or PE, and being '
        + 'watched makes coordination worse for everybody',
      'They were reaching for a new skill, and reaching means more failed attempts than usual',
    ],
    tonight: [
      'Do it for them tonight. Buttons, teeth, cutting up food. Independence is a tomorrow '
        + 'project.',
      'Choose the pajamas that go on easily and skip anything with a zipper or a small '
        + 'fastener.',
      'If they want to move, let them, even at this hour. Rough play and floor time often '
        + 'settle a frustrated body better than sitting still does.',
    ],
    tomorrow: [
      'Take the one task that caused today\'s worst moment and make it easier by design, such '
        + 'as elastic laces, a chunkier pencil, or a step stool.',
      'Front load the physical demand. Put the hard motor task in the morning, when there is '
        + 'more left to spend on it.',
    ],
    teaching: 'Here is the piece that reframes most motor days. Once a movement becomes automatic it '
      + 'stops costing attention, and that freed up attention is what everybody else is using to '
      + 'listen to the teacher while they write. For a child whose movements have not automated '
      + 'yet, writing takes the writing budget and the listening budget at the same time, so what '
      + 'gets sacrificed is not the movement, it is everything the movement was supposed to be '
      + 'serving. That is why a hard motor day shows up as missed instructions, unfinished work, '
      + 'and a meltdown that appears to be about something else entirely. Practice is still worth '
      + 'doing, but the real point of practice is not better movement, it is cheaper movement.',
  },
  tics: {
    card: 'A bad tic day is exhausting to have and hard to watch, and there is nothing you did to '
      + 'cause it or could have done to stop it. Tics rise and fall on their own schedule, so a '
      + 'bad stretch is a stretch and not a direction. Getting through today counts.',
    opening: 'Tics were bad today. They wax and wane on their own, and they reliably get worse with '
      + 'excitement, stress, and being tired, which means today tells you more about the day than '
      + 'about anything changing. Was there something big in it, good or bad?',
    likely: [
      'Excitement or anticipation, which raises tics as much as stress does, so a genuinely '
        + 'fun day can produce a hard tic evening',
      'A day of holding them in somewhere public, which is effortful and tends to be followed '
        + 'by a release once they are home',
      'Being tired, being unwell, or coming off a heavy week, since tics track overall load '
        + 'closely',
    ],
    tonight: [
      'Do not mention them. No reminders, no hand on the shoulder, no watching. Attention to '
        + 'a tic tends to raise it.',
      'Give them something absorbing and low pressure. Tics often quiet down during calm, '
        + 'focused activity.',
      'If they are upset about it, describe the tic as something their body is doing rather '
        + 'than as something they are doing.',
    ],
    tomorrow: [
      'Lower the overall load of the day rather than targeting the tics. Less to do usually '
        + 'shows up as fewer tics.',
      'If tics are hurting, getting in the way at school, or upsetting them a lot, that is a '
        + 'clinician conversation rather than a home project. Write down what you saw today.',
    ],
    teaching: 'Most tics arrive with a premonitory urge, a physical build up in the muscle group that '
      + 'keeps climbing until the tic happens, closer to a sneeze or an itch than to a habit. '
      + 'Children can often hold tics back for a while, and many do it all day at school, but '
      + 'suppressing is effortful and the tension keeps accumulating while they hold, which is '
      + 'why the worst tic hour of the day is so frequently the first hour at home. That changes '
      + 'what today means, because a terrible tic evening after a fine report from school is '
      + 'usually evidence of how hard they worked rather than evidence of getting worse. It also '
      + 'means that asking a child to stop is asking them to do the tiring thing, and telling '
      + 'them to relax aims straight at what they have least control over. Tics naturally wax and '
      + 'wane over weeks and months, so a bad stretch is expected and is not the new baseline.',
  },
  emotionalRegulation: {
    card: 'Being the wall that somebody else\'s feelings crash into all day is one of the heaviest '
      + 'things parenting asks for, and you are allowed to be wrecked by it. A child losing '
      + 'control is not a child being manipulative. You stayed, and staying was the thing that '
      + 'worked even when it did not feel like it.',
    opening: 'Big feelings ran today. In the middle of that, the reasoning part of the brain is '
      + 'temporarily unavailable, so everything you explained was landing on nobody, which is '
      + 'worth knowing before you replay it all night. What did the worst moment look like?',
    likely: [
      'Effort simply ran out. Self control is depletable, and it is thinnest in the last '
        + 'hours of the day',
      'The trigger was small and the reaction was large, which usually means the trigger was '
        + 'the last item rather than the cause',
      'Hunger, thirst, or short sleep, which lower the threshold for everything and stay '
        + 'invisible until afterward',
    ],
    tonight: [
      'Nothing gets discussed tonight. Repair can be a look, a hand, sitting nearby. Words '
        + 'can wait until tomorrow, or forever.',
      'Lower your own volume before you try to lower theirs. Your calm is contagious in a way '
        + 'your reasoning is not.',
      'Feed everybody something, including you. A lot of late day meltdowns have a blood '
        + 'sugar component nobody accounted for.',
    ],
    tomorrow: [
      'Put food and a break at the hour today fell apart, before anything is asked of '
        + 'anybody.',
      'Pick one sentence to use instead of explaining, such as I am right here, and use it '
        + 'every single time.',
    ],
    teaching: 'During a full meltdown, the parts of the brain that handle reasoning, perspective, and '
      + 'consequences are effectively offline, and stress chemistry keeps them that way until the '
      + 'body comes back down. That is not an excuse, it is a sequence, and it means every '
      + 'sentence you said during it went nowhere no matter how good the sentence was. What does '
      + 'reach a child in that state is a calmer nervous system sitting next to theirs, which is '
      + 'where the term co-regulation comes from, and it is also why your tone matters more than '
      + 'your content. The long view helps too. Genuine self control does not really begin until '
      + 'somewhere around 3 and a half to 4 years old, and the brain systems running it keep '
      + 'developing well past adolescence, so what you are doing is not correcting a skill they '
      + 'already have. You are lending them yours while theirs gets built.',
  },
  anxiety: {
    card: 'A day ruled by worry drains both of you, and the reassurance you gave came from love '
      + 'even though it did not hold for long. Anxiety is loud and it is also a liar about how '
      + 'much danger is actually around. Being the steady one for a whole day was work.',
    opening: 'Anxiety ran today. What makes these days so tiring is that reassurance works for about 4 '
      + 'minutes and then the question comes back, so you can do everything right and still be '
      + 'standing at the start again. What was the worry today, or was it everything?',
    likely: [
      'Something specific was coming up, and the anticipation is almost always worse than the '
        + 'event itself turns out to be',
      'A need to check, to ask again, or to be told it is fine, which quiets the worry '
        + 'briefly and then brings the next round sooner',
      'Sleep. Anxiety and short sleep feed each other, so one bad night can set up a bad day '
        + 'that sets up another bad night',
    ],
    tonight: [
      'Tonight is not the night to push. Sit in the doorway, leave the light on, let the '
        + 'accommodation happen, and count it as a night off.',
      'Say both halves together, that it makes sense they are scared and that you know they '
        + 'can handle it. Neither half works alone.',
      'Give yourself a hard stop on the reassurance loop. One answer, then I have told you '
        + 'what I know, then change the subject.',
    ],
    tomorrow: [
      'Pick one small accommodation and shrink it slightly rather than removing it. The chair '
        + 'a foot farther from the bed.',
      'Name the pattern out loud tomorrow when you are both calm. Worry asks the same '
        + 'question in different clothes.',
    ],
    teaching: 'There is a finding here that catches nearly every parent, and it is not about anybody '
      + 'doing something wrong. Accommodating a child\'s anxiety, sitting with them until they '
      + 'fall asleep, answering the question one more time, letting them skip the thing, works '
      + 'immediately and reliably, and that is exactly the problem, because it teaches the '
      + 'anxiety that the only way through was you. Something like 97 percent of parents of '
      + 'anxious children do this, so it is close to universal rather than a mistake you '
      + 'personally made. What the research points to instead is holding two things at once, that '
      + 'the fear is real and that they are capable of getting through it, and then reducing the '
      + 'accommodation slowly rather than pulling it out from under them. None of that is '
      + 'tonight\'s project. Tonight the accommodation is fine, and knowing the mechanism is what '
      + 'you carry into tomorrow.',
  },
  ocd: {
    card: 'A day taken over by rituals and questions is exhausting in a very specific way, because '
      + 'you spent it as part of the routine. Going along with it today was the kindest available '
      + 'move, and it is not the long term one. This was never a willpower problem and it was '
      + 'never a discipline problem.',
    opening: 'OCD had the day. Part of what makes it so heavy is that you get pulled inside it, '
      + 'checking, answering, redoing, until you are performing the compulsions alongside them. '
      + 'Where did you get recruited today?',
    likely: [
      'Stress anywhere in the day, since general load raises the volume of the obsessions '
        + 'without changing their content',
      'Reassurance, which functions as a compulsion once it is asked for repeatedly, and '
        + 'feeds the cycle it appears to relieve',
      'A ritual got interrupted or blocked, which spikes distress far past what interrupting '
        + 'an ordinary habit would',
    ],
    tonight: [
      'Let tonight be a truce. Rituals allowed, questions answered once, no stands taken.',
      'Answer with a phrase you will reuse, such as that is the OCD asking, and I am not '
        + 'going to answer it again. Gentle tone, fixed content.',
      'Separate the child from the OCD out loud. It gave you a hard day is a very different '
        + 'sentence from you had a hard day.',
    ],
    tomorrow: [
      'Pick the one ritual you are most involved in and reduce your part in it by a small '
        + 'amount. Your part, not theirs.',
      'If OCD is taking real time out of the day, ask specifically about exposure and '
        + 'response prevention. It has the strongest evidence behind it and it needs a clinician '
        + 'to pace.',
    ],
    teaching: 'Compulsions work, and that is the whole trap. Every ritual and every answered question '
      + 'brings the anxiety down within seconds, which teaches the brain that the doubt was worth '
      + 'taking seriously and will need answering again next time, a little sooner and a little '
      + 'bigger. This is why reassurance functions as a compulsion rather than as comfort, and '
      + 'why the 20th answer to the same question does less than the 1st did, even though it is '
      + 'the same words from the same person. Almost every family gets pulled into the rituals, '
      + 'because refusing looks cruel in the moment and going along looks like love. The '
      + 'treatment, exposure and response prevention, works by doing the opposite of what feels '
      + 'right, tolerating the doubt without answering it, and the pacing of that is specifically '
      + 'a clinician\'s job rather than something to attempt from scratch at 9pm.',
  },
  bigChanges: {
    card: 'Change costs more than it looks like it should, and a rough day in the middle of one is '
      + 'the expected thing rather than a warning sign. Falling apart now does not mean the '
      + 'change was wrong. You are doing two jobs at once, the change and the ordinary day on top '
      + 'of it.',
    opening: 'Big changes make everything harder, and this is the part nobody warns you about. '
      + 'Children often hold together during the upheaval and then come apart afterward, right '
      + 'when it looks like it should be over. Where are you in it, and what did today take out '
      + 'of you?',
    likely: [
      'Predictability dropped, and predictability is most of what makes a young child feel '
        + 'safe, so almost anything can look like a problem right now',
      'Skills slipping backward, such as sleep, toileting, clinginess, or baby talk, which is '
        + 'a normal response to load and usually temporary',
      'They are picking up your stress, since children read adult nervous systems long before '
        + 'they can name what they are reading',
    ],
    tonight: [
      'Keep one thing identical to how it was before. One song, one blanket, one order of '
        + 'events. Anchors do a lot of work.',
      'Let the regression happen tonight. The bottle, the sharing a bed, the thing you had '
        + 'already moved past. It goes back later.',
      'Tell them what tomorrow looks like in 3 short sentences. Not reassurance, just the '
        + 'schedule.',
    ],
    tomorrow: [
      'Pick one small routine and protect it exactly, even while everything else stays '
        + 'chaotic.',
      'Give one advance warning about anything changing tomorrow, delivered the night before '
        + 'rather than in the morning.',
    ],
    teaching: 'Development is not a straight line and it visibly bends under load. When a child is '
      + 'spending capacity on adjusting, they pull it from somewhere else, which is why skills '
      + 'that were solid start slipping during a move, a new baby, a new school, or a loss. That '
      + 'is regression, it is normal, and it is not lost ground so much as reallocated ground. '
      + 'The timing is what catches people out, because the hardest stretch often arrives after '
      + 'the change rather than during it, once the adults have relaxed and everybody expects '
      + 'things to be settling. So the fact that today was hard while the change itself is '
      + 'already over is not a bad sign. It is the ordinary shape of this, and the skills that '
      + 'slipped tend to come back on their own once there is slack in the system again.',
  },
  executiveFunction: {
    card: 'A day where nothing got started, finished, or found is not laziness and it is not a '
      + 'values problem. The skills that run planning and follow through are among the last to '
      + 'develop and the first to fold under stress. Being somebody else\'s reminder system all '
      + 'day is real labor.',
    opening: 'Nothing got started or finished today. Those days leave you feeling like you nagged for '
      + '12 hours, when what you were really doing was running an outside control tower for a '
      + 'system that is still being built. What was the moment you felt it most?',
    likely: [
      'Too many steps held in the head at once, since working memory is the first thing to '
        + 'drop when a child is tired or stressed',
      'The task was not unclear, the starting was the problem. Getting started is its own '
        + 'separate skill from doing',
      'Time went missing. Estimating how long anything takes develops late, so being late was '
        + 'probably genuinely surprising to them',
    ],
    tonight: [
      'Cut tonight to 3 steps and post them where they can be seen. Externalize instead of '
        + 'reminding.',
      'Do the next step beside them rather than telling them to do it. Company gets more done '
        + 'than instructions at this hour.',
      'Let something stay unfinished overnight. The backpack can be a tomorrow morning '
        + 'problem.',
    ],
    tomorrow: [
      'Take the single hardest sequence of the day and put it on paper or in pictures where '
        + 'they can see it. Get it out of your voice.',
      'Start one task with them tomorrow instead of assigning it. Just the first 60 seconds.',
    ],
    teaching: 'Executive function is often described as the brain\'s air traffic control system, '
      + 'holding several things in mind at once, watching for errors, and resisting the pull '
      + 'toward the easier thing. Two facts about it change how tonight reads. First, it develops '
      + 'slowly and keeps developing well past adolescence, so a 9 year old with the planning '
      + 'skills of a 6 year old is not short on effort, they are on a different timeline for one '
      + 'specific skill. Second, it is the most fragile system in the brain under stress, hunger, '
      + 'and fatigue, which is why the child who managed the morning routine fine on Tuesday '
      + 'cannot find their shoes on Thursday. That is also why the fixes that work are the ones '
      + 'outside the child\'s head. Lists, timers, checklists, and doing the first step alongside '
      + 'them are not crutches, they are the actual intervention, and they work for adults too.',
  },
  learningDifferences: {
    card: 'A hard learning day is usually a day where enormous effort produced very little visible '
      + 'output, and that gap is crushing to sit next to. Nothing about today was a measure of '
      + 'how smart your child is. Staying with them through it was worth more than the worksheet '
      + 'was.',
    opening: 'Learning was brutal today. What makes these days so demoralizing is the ratio, all that '
      + 'effort and almost nothing to show anybody at the end of it. Was it the work itself, or '
      + 'the giving up, or something somebody said about it?',
    likely: [
      'The effort was invisible. A child can work 4 times as hard as the kid next to them for '
        + 'a third of the output, and only output gets seen',
      'Shame showed up wearing refusal, because I will not is a much easier sentence to say '
        + 'than I cannot',
      'They were already near their limit before the homework started, since the school day '
        + 'had spent the fuel',
    ],
    tonight: [
      'Stop the homework. Write a note to the teacher saying you called it. That is a '
        + 'legitimate move and it is yours to make.',
      'Read to them instead of having them read. Same books, no performance.',
      'Say out loud that you saw how hard they worked, rather than that they did a good job. '
        + 'The effort is the true part.',
    ],
    tomorrow: [
      'Set a time limit on homework instead of a completion goal. 20 minutes of real trying, '
        + 'then done, and tell the teacher that is the plan.',
      'Find one thing tomorrow that they are genuinely good at and make sure it happens. The '
        + 'ratio of hard to easy in their day matters.',
    ],
    teaching: 'Learning differences are specific rather than general, and that is the part that gets '
      + 'lost at a kitchen table at 7pm. A child can have a real difficulty with decoding words '
      + 'or holding number facts while being entirely typical or strong in reasoning, vocabulary, '
      + 'and problem solving, so a bad worksheet is information about one narrow channel and '
      + 'about nothing else. What makes these days so heavy is that school measures output while '
      + 'the child is paying in effort, and effort is invisible, so the hardest working person in '
      + 'the room routinely looks like the least engaged one. That gap produces shame quickly, '
      + 'and shame comes out as refusal, clowning, and I do not care long before it ever comes '
      + 'out as I cannot do this. Which means the thing worth protecting tonight is not the '
      + 'assignment. It is their sense that trying is still worth doing.',
  },
  gifted: {
    card: 'A day where the thinking runs far ahead of the coping is genuinely hard, and it does not '
      + 'fit anybody\'s picture of what an easy kid looks like. Being advanced in one area does '
      + 'not raise the floor in the others. What you saw today was a child, not a small adult '
      + 'with a bad attitude.',
    opening: 'Hard day. One of the strange parts of parenting a child who thinks like this is that '
      + 'everybody assumes it makes things easier, when the gap between what they understand and '
      + 'what they can carry is its own problem. What was today, the intensity, the frustration, '
      + 'or something they got stuck on?',
    likely: [
      'They understood something they do not yet have the life experience to hold, such as '
        + 'death, unfairness, or something in the news',
      'Perfectionism. The vision was ahead of the hands, and the result got destroyed rather '
        + 'than finished',
      'Under stimulation, which in a child who needs more looks nothing like boredom and a '
        + 'great deal like behavior',
    ],
    tonight: [
      'Let them talk it out if they want to, even if the subject is enormous and it is '
        + 'bedtime. Being taken seriously settles this kind of child faster than being redirected '
        + 'does.',
      'Drop the expectations that come with being capable. Tonight they get helped with '
        + 'things they can technically do themselves.',
      'Physical and silly if you can manage it. Bodies and jokes are underused with children '
        + 'who live in their heads.',
    ],
    tomorrow: [
      'Give one real challenge tomorrow in something they care about, separate from school.',
      'Match the emotional support to their age rather than to their reasoning. If they are '
        + '7, they get 7 year old comfort.',
    ],
    teaching: 'There is a term for exactly this, asynchronous development, and it means the '
      + 'intellectual, emotional, social, and physical parts of a child move at genuinely '
      + 'different rates. The more advanced the thinking, the wider that spread tends to be, so '
      + 'the child who can argue like an adult about fairness at dinner still has the emotional '
      + 'equipment of their actual age when the argument does not go their way. Two specific '
      + 'frustrations come out of it, understanding hard concepts such as death or injustice '
      + 'without the life experience to metabolize them, and having a mind that can picture the '
      + 'finished thing while the hands cannot yet make it, which is why so many projects end up '
      + 'torn up. Adults read the advanced part and then calibrate everything to it, including '
      + 'the comfort and the consequences. The correction is short, and it is that they are still '
      + 'the age they are.',
  },
  downSyndrome: {
    card: 'Hard days belong to every child, and your child\'s include everything any other kid\'s '
      + 'do, plus the appointments and the explaining. Today being rough does not have to be '
      + 'about Down syndrome at all. Sometimes a bad day is just a bad day, and that is allowed '
      + 'to be true here too.',
    opening: 'Hard day. Something that wears on parents in your position is having to work out whether '
      + 'today was an ordinary hard day or something bigger, and that sorting is extra labor '
      + 'nobody credits you for. What did today actually look like?',
    likely: [
      'Frustration at not being understood, since understanding usually runs ahead of '
        + 'speaking and that gap is where the anger tends to live',
      'Ordinary child reasons, such as tired, hungry, jealous of a sibling, or having been '
        + 'told no. These get overlooked here and they are often the answer',
      'Physical discomfort that is hard to report, such as an ear, a tooth, or constipation, '
        + 'which can drive behavior for days before anybody finds it',
    ],
    tonight: [
      'Communicate the easy way. Signs, pointing, a photo on your phone, whatever they '
        + 'already have.',
      'Skip the skill building. Tonight you dress them, you feed them, and you carry them if '
        + 'they want carrying.',
      'Give physical closeness if they like it. It works better than talking at the end of a '
        + 'day like this.',
    ],
    tomorrow: [
      'Pick one moment that reliably frustrates them and add a way to say the thing, a sign, '
        + 'a picture, or a word approximation you will accept.',
      'If behavior has been off for more than a few days, get the physical possibilities '
        + 'ruled out before treating it as behavior.',
    ],
    teaching: 'There is a well documented trap with a name, diagnostic overshadowing, where every '
      + 'difficulty a child has gets attributed to the diagnosis and the ordinary explanation '
      + 'never gets checked. In practice it means a child in pain, a child who is bored, a child '
      + 'grieving a change, or a child who is simply 5 and furious can all get filed under Down '
      + 'syndrome, by professionals as much as by families. Two things are worth holding at once '
      + 'here. Speech development typically takes longer while understanding moves out ahead of '
      + 'it, so real frustration at not being able to say a thing they clearly know is common and '
      + 'is not something they are doing on purpose. And your child has the full ordinary range '
      + 'of bad days available to them, with all the usual causes, so looking for the usual '
      + 'causes first is not denial. It is accuracy.',
  },
  prematurity: {
    card: 'Hard days with a baby or child who came early carry an extra weight, because part of you '
      + 'is always checking whether this is normal. It usually is. What you are doing is not the '
      + 'same job as parenting a full term baby, and you are doing it without the extra hands '
      + 'that should come with it.',
    opening: 'Hard day. With a baby who came early there is often a second track running underneath '
      + 'everything, the one where you are monitoring instead of just parenting, and that track '
      + 'is exhausting all by itself. What was today, the hours, the feeding, the worry, or all '
      + 'of it?',
    likely: [
      'The day got measured against the wrong clock. Development tracks corrected age rather '
        + 'than birthday age for roughly the first 2 years',
      'Babies born early often have a lower tolerance for stimulation and give fewer clear '
        + 'cues, so overstimulation can build quietly and then crash',
      'Your own nervous system is still carrying the hospital. That does not resolve on the '
        + 'discharge date, and it shapes how a hard day lands',
    ],
    tonight: [
      'Turn everything down. Lights, sound, handling, passing them around. Less input is the '
        + 'most reliable tool you have.',
      'Take the shift off if there is anybody at all who can take it. 2 hours of real sleep '
        + 'changes the whole night.',
      'Hold them skin to skin if that soothes both of you. It does something for your stress '
        + 'as well as theirs.',
    ],
    tomorrow: [
      'Work out the corrected age and use that number when anybody, including you, compares '
        + 'them to another baby.',
      'Write down the one thing you are worried about, with what you actually saw, and take '
        + 'it to the next appointment rather than carrying it alone.',
    ],
    teaching: 'Corrected age is the number that makes most of this make sense, and it is simple. Take '
      + 'the age since birth and subtract the weeks they arrived early, and that is the age to '
      + 'judge development against for about the first 2 years. A baby born at 32 weeks was 8 '
      + 'weeks early, so at 4 months old they are developmentally around 2 months, and expecting '
      + 'rolling over when you should be expecting head control creates a problem that does not '
      + 'exist. This matters most at a family gathering, because the relative comparing your baby '
      + 'to their neighbor\'s is comparing against the wrong number, and so is every milestone '
      + 'chart on a wall. Catching up is normal and it is not instant, and the trajectory across '
      + 'months tells you far more than any single day ever will.',
  },
  medicalComplexity: {
    card: 'Hard days in a medically complex house are heavier because the ordinary parenting sits '
      + 'on top of a second full time job nobody scheduled. Today asked you to be a nurse, a '
      + 'scheduler, and a parent at the same time. Not being able to do all three well at once is '
      + 'arithmetic, not failure.',
    opening: 'Hard day. In your situation a hard day is rarely only a hard day, because it comes with '
      + 'working out what it might mean and whether to call somebody. That sorting is invisible '
      + 'work. What made today the one you flagged?',
    likely: [
      'Something physical was off, such as pain, sleep, a medication timing, or a slow '
        + 'building infection, and it showed up as behavior first',
      'The system was the problem rather than the child, such as a cancelled appointment, a '
        + 'denied authorization, or a supply that did not arrive',
      'Plain accumulation. Vigilance does not switch off, and a body kept on alert for months '
        + 'does not have a normal reserve left for an ordinary bad day',
    ],
    tonight: [
      'Do the medical minimum and nothing past it. Meds, feeds, safety. Everything else can '
        + 'be tomorrow.',
      'Eat something and sit down for 10 minutes before the night shift starts, even if it is '
        + 'the only 10 minutes.',
      'If you are unsure whether something needs a call, write down what you saw with the '
        + 'time, then decide. Writing it separates the worry from the data.',
    ],
    tomorrow: [
      'Send one message tomorrow, to the nurse line, the care coordinator, or whoever owes '
        + 'you an answer. One, not the whole list.',
      'Ask directly about respite or in home hours if you have not yet. It is a normal '
        + 'request and it is not a statement about how you are coping.',
    ],
    teaching: 'Two things about medically complex parenting are well documented and almost never said '
      + 'to the person doing it. The first is that chronic vigilance has a physical cost, and '
      + 'study after study finds high rates of exhaustion, disrupted sleep, and strain among '
      + 'parents in this position, which means what you feel tonight is a load effect rather than '
      + 'a character one. The second is that behavior is often the earliest symptom in a child '
      + 'whose body is hard to read, so a sudden stretch of irritability, refusal, or bad sleep '
      + 'genuinely can be the first sign of pain, an infection, or a medication issue, and '
      + 'checking that before treating it as behavior is good practice rather than overreacting. '
      + 'There is a third thing that deserves saying plainly. Your child is a child first, with '
      + 'the same need for boredom, play, and ordinary bad days as anybody else, and so are you, '
      + 'with a life that existed before the medical calendar. Both of those get squeezed out '
      + 'quietly, and noticing that is most of getting any of it back.',
  },
  deafHoh: {
    card: 'A hard day here is very often a hard ACCESS day rather than a hard child. Somewhere in '
      + 'today there was a conversation they could not get into, or a room they could not hear in, '
      + 'and by evening that has to come out somewhere. It usually comes out at you, because you are safe.',
    opening: 'A day where it was all hard work. Those days are usually about what they could not reach '
      + 'rather than about how they behaved, and the part nobody sees is how much effort went into '
      + 'the hours before the part that fell apart. Where in the day did it start going wrong?',
    likely: [
      'Listening or watching all day in a room that was not set up for it, which is effortful in a '
        + 'way that nothing about it looks effortful from the outside.',
      'A group conversation they were present for and not actually inside, such as a meal, a car '
        + 'ride or a classroom with several people talking at once.',
      'Technology that was not working right, or a setting that was off, and nobody noticed for hours.',
      'Being the only Deaf or hard of hearing person in the room again, which is its own kind of tiring.',
    ],
    tonight: [
      'Give them their language with no work in it. Whatever is easiest for them tonight, signed, '
        + 'captioned, written, one person at a time, is the right choice and not a backward step.',
      'Turn the room down. 1 light, 1 person, no background television, no competing voices.',
      'If they want the hearing technology off for the evening, off is fine. An ear that has been '
        + 'working all day is allowed to stop.',
    ],
    tomorrow: [
      'Pick the 1 part of the day you already know is the worst for access, such as the car or the '
        + 'dinner table, and change that one thing rather than the whole day.',
      'If today went wrong at school or at an activity, write down what happened while you still '
        + 'remember it. It is far easier to ask for something with a specific example than with a feeling.',
    ],
    teaching: 'Here is the part that almost nobody tells parents. Listening or watching for language '
      + 'all day is genuine physical and mental work, and researchers who measured fatigue in children '
      + 'with hearing loss found levels higher than those reported for children with cancer, '
      + 'rheumatoid arthritis or diabetes. That is not a figure of speech, it is a published finding. '
      + 'So a child who held it together all day and then came apart at 5pm has not had a behavior '
      + 'problem, they have run out of a resource that was being spent all day on something invisible. '
      + 'The same work also eats the resources left over for learning, which is why a hard access day '
      + 'and a hard learning day so often turn out to be the same day.',
  },

  blindLowVision: {
    card: 'A hard day is often a day where everything cost more than it should have. Information that '
      + 'other people pick up by glancing has to be actively gone and got, and doing that from waking '
      + 'until bedtime is exhausting in a way that does not show.',
    opening: 'One of the harder ones. Days like this are usually about how much the day asked of them '
      + 'rather than about how they handled it, and a new place or a changed room can use up an '
      + 'entire day on its own. What was different about today?',
    likely: [
      'Somewhere unfamiliar, or somewhere familiar that had been rearranged, which means rebuilding '
        + 'the map of a room from scratch while also doing whatever they came to do.',
      'A day of being helped too much, steered, moved, or spoken for, which is tiring and also '
        + 'quietly infuriating.',
      'Eyes that are simply done, if they have usable vision, because using it hard all day has a limit.',
      'Materials that arrived in the wrong format again, so the real lesson was spent working around it.',
    ],
    tonight: [
      'Put everything back exactly where it belongs. A house they can move through without thinking '
        + 'is the fastest rest there is.',
      'Say what you are doing as you do it, rather than narrating at them. Where you are, what you '
        + 'are carrying, when you are leaving the room.',
      'Choose something with no visual work in it at all, such as music, audio, or being read to.',
    ],
    tomorrow: [
      'Do the 1 thing that went wrong today properly, such as getting tomorrow in braille or in audio '
        + 'before it is needed rather than during.',
      'Leave 10 extra minutes anywhere new, and let them do the walk themselves rather than being '
        + 'steered through it.',
    ],
    teaching: 'A sighted person takes in an enormous amount of a room for free, in a single glance, '
      + 'without ever deciding to. A child who is blind or has low vision gets none of that for free. '
      + 'Every piece of it has to be sought out deliberately, one at a time, and held in memory, which '
      + 'is why the same task can cost several times more and why a new environment can eat a whole '
      + 'day. What looks at 6pm like a short fuse is very often a child who has been doing continuous '
      + 'cognitive work since breakfast at something nobody else in the house had to do at all. '
      + 'The hovering you are probably doing to help is also tiring, in a different way, because '
      + 'being steered takes the day away from them.',
  },

  exploring: {
    card: 'You do not need a name for something to know it is hard, and you do not have to justify '
      + 'today to anybody to take it seriously. Noticing that something is not easy is the useful '
      + 'part, and you already did that. Not knowing yet is a normal place to be standing, not a '
      + 'failure to figure it out.',
    opening: 'Hard day, and you are still working out what fits. That is a lonely spot, because you '
      + 'can see something is going on and you do not yet have the word that makes other people '
      + 'take it seriously. What does it look like on the days it is hard?',
    likely: [
      'A pattern that is real but scattered, turning up in a few different situations, which '
        + 'is exactly the kind that is hardest to describe to a professional',
      'It is worse at home than anywhere else, and the people who see them elsewhere say '
        + 'there is nothing wrong, which makes you feel like you are imagining it',
      'There may be nothing to name at all, and this may be a demanding stretch inside a '
        + 'normal range, which is a real possibility and not a lesser one',
    ],
    tonight: [
      'Lower the bar the same way you would if you did have a name for it. The permission '
        + 'does not depend on a diagnosis.',
      'Write 3 sentences about today while it is fresh. What came before, what it looked '
        + 'like, how long it lasted. Not for anybody yet.',
      'Stop researching for tonight. Searching at 10pm reliably makes things worse and finds '
        + 'the scariest version of everything.',
    ],
    tomorrow: [
      'Start a plain list of what you notice, with dates. It is the single most useful thing '
        + 'you can bring to a pediatrician, and it beats trying to remember.',
      'Raise it at the next appointment using what you saw rather than a label. He falls '
        + 'apart every day at 4pm gets further than a guess about why.',
    ],
    teaching: 'Two things are worth knowing while you are in this stretch. The first is that parent '
      + 'observation is a better early signal than most people assume, and work on developmental '
      + 'concerns repeatedly finds that when a parent thinks something is going on they are more '
      + 'often right than wrong, which is a reason to write it down rather than to talk yourself '
      + 'out of it. The second is that support does not wait on a name, because access to speech '
      + 'therapy, occupational therapy, and early intervention is generally driven by what a '
      + 'child needs rather than by whether anybody has attached a label, and in the United '
      + 'States you can request an evaluation yourself without waiting for a referral. That '
      + 'matters, because wait and see advice costs time that is much easier to spend than to get '
      + 'back. And the goal here was never a diagnosis anyway, it was understanding what is '
      + 'actually happening well enough to make days like today less frequent, which is the only '
      + 'thing a name is ever useful for.',
  },
};

/* Written once. Routed to, never screened for. */
export const CRISIS_DOOR = {
  line: 'One more thing, and then this goes away. Some nights the hard part is not the day, it is '
    + 'you, and being at the end of yourself is a different thing from being tired. If tonight is '
    + 'one of those, saying it out loud to a real person helps more than anything in an app can. '
    + 'The National Parent Helpline, 1 855 427 2736, exists for exactly this and is staffed '
    + 'weekdays. If it is after hours or you want somebody right now, you can call or text 988 in '
    + 'the United States and talk to a person, and you do not have to be in an emergency to use '
    + 'it. Your own doctor counts too, and so does anyone who loves you.',
  when: [
    'You are frightened of your own anger, or you got closer to acting on it than you want to '
      + 'think about',
    'You look at your child and cannot feel anything, in a place where there used to be '
      + 'something',
    'You keep thinking about walking out the door and not coming back',
    'It has felt like this most days for 2 weeks or more, rather than only tonight',
    'You are leaning on something to get through the evenings, such as drinking more than you '
      + 'meant to',
    'There is nobody in your life you could say any of this out loud to',
  ],
};

export const HARD_DAY_SOURCES = [
  { org: 'Child Mind Institute',
    label: 'Why Kids Behave Worse at Home Than at School',
    url: 'https://childmind.org/article/kids-different-home-school/' },
  { org: 'Child Mind Institute',
    label: 'Myths About Selective Mutism',
    url: 'https://childmind.org/article/myths-about-selective-mutism/' },
  { org: 'Child Mind Institute',
    label: 'Treating Anxiety in Kids by Working With Parents',
    url: 'https://childmind.org/article/treating-anxiety-in-kids-by-working-with-parents/' },
  { org: 'Child Mind Institute',
    label: 'Understanding Sensory Issues in Children',
    url: 'https://childmind.org/article/sensory-processing-issues-explained/' },
  { org: 'American Academy of Pediatrics, HealthyChildren.org',
    label: 'Corrected Age for Preemies',
    url: 'https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx' },
  { org: 'National Institute of Neurological Disorders and Stroke, NIH',
    label: 'Tourette Syndrome, on premonitory urge, suppression, and waxing and waning',
    url: 'https://www.ninds.nih.gov/health-information/disorders/tourette-syndrome' },
  { org: 'Center on the Developing Child, Harvard University',
    label: 'What Is Executive Function and How Does It Relate to Child Development',
    url: 'https://developingchild.harvard.edu/resources/infographics/what-is-executive-function-and-how-does-it-relate-to-child-development/' },
  { org: 'ZERO TO THREE',
    label: 'Toddlers and Self Control, A Survival Guide for Parents',
    url: 'https://www.zerotothree.org/resource/toddlers-and-self-control-a-survival-guide-for-parents/' },
  { org: 'National Association for Gifted Children',
    label: 'Tip Sheet, Asynchronous Development',
    url: 'https://assets.noviams.com/novi-file-uploads/nagc/pdfs-and-documents/NAGC-TIP_Sheet-Asynchronous_Development.pdf' },
  { org: 'National Parent Helpline, Parents Anonymous',
    label: 'Emotional support for parents, 1 855 427 2736',
    url: 'https://www.nationalparenthelpline.org/' },
];

/* The 2 added by hand after the check in turned out to give every lens
   a row, including the 2 the written questions do not cover. */
HARD_DAY_SOURCES.push(
  { org: 'Peer reviewed',
    label: 'Bess and Hornsby, Ear and Hearing, on listening effort and fatigue in children with '
      + 'hearing loss reported above the levels reported for several chronic illnesses',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5603232/' },
  { org: 'National Federation of the Blind',
    label: 'Educating Blind Children, on equal expectations and rejecting a deficit model',
    url: 'https://nfb.org/educating-blind-children' },
);

export const HARD_DAY_TITLE = 'About today';
export const HARD_DAY_TALK = 'Tell me what happened';
export const HARD_DAY_MORE = 'What might help tonight';

/* The row she actually marked hard, preferred over the general one,
   because "focus never landed" is a more useful thing to open a
   conversation about than "today was hard". Falls back to general. */
export function hardDayFor(answers) {
  if (!answers || typeof answers !== 'object') return null;
  const hard = Object.keys(answers).filter((id) => answers[id] === 'hard');
  if (!hard.length) return null;
  const specific = hard.filter((id) => id !== 'general' && HARD_DAY[id])[0];
  const pick = specific || (hard.indexOf('general') !== -1 ? 'general' : null);
  if (!pick || !HARD_DAY[pick]) return null;
  return { id: pick, ...HARD_DAY[pick], alsoHard: hard.length - 1 };
}
