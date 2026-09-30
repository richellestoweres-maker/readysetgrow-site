/**
 * Ready Set Grow: Potty Training
 * ------------------------------------------------------------------
 * She asked for this for the age it belongs to, written for the child
 * in front of her rather than for children in general, which is why
 * the boys and girls pages are separate and why only the one that
 * applies is shown.
 *
 * THE THING THIS PAGE EXISTS TO SAY
 * Readiness is a short list of skills rather than a birthday. A child
 * who has those skills usually gets there in a few weeks. A child who
 * does not can spend months and finish at about the same age anyway.
 * So waiting is very often the faster route, and there is nothing to
 * win by starting first.
 *
 * WHAT IS DELIBERATELY NOT HERE
 * No method sold by name, no 3 day promise, no schedule to fall behind
 * on, and no diagnosis. Where something is genuinely a doctor's call,
 * such as constipation or pain when they pee, the page says so plainly
 * and says it early, because that is the one thing a parent cannot
 * work out at home.
 *
 * SOURCES are the AAP and the NIDDK, listed at the bottom of the
 * screen the same way every other care page in the app lists them.
 */

export const POTTY_TITLE = 'Potty training';
export const POTTY_SUB =
  'When they are actually ready, how to start, and why the calendar has less to do with it '
    + 'than everybody tells you.';

export const POTTY_INTRO = [
  'Potty training is one of the few things in early childhood where waiting is usually faster '
    + 'than starting. Readiness is not an age, it is a short list of skills, and a child who has '
    + 'those skills can often get there in a few weeks, while a child who does not can spend '
    + 'months on it and finish at about the same age anyway.',
  'So there is nothing to win here. Nearly every healthy child is out of daytime diapers by '
    + '4, whichever month they started, and nobody in kindergarten knows who was first. If this '
    + 'has already been hard at your house, that is ordinary and it is not a verdict on you or on '
    + 'them.',
];

/* The pages. Only one of boys and girls is ever shown, picked from the
   child's own record, because a parent looking up how to help their son
   does not need a page about wiping front to back. */
export const POTTY_TABS = [
  {
    id: 'ready',
    label: 'Are they ready',
    sections: [
      {
        h: 'The signs that actually matter',
        body: [
          'You are looking for several of these rather than all of them. Most children show a '
            + 'few somewhere between 18 and 24 months, and plenty of children not until closer to '
            + '3. Physical readiness and being willing are 2 different things, and you need both.',
        ],
        list: [
          'Staying dry for 2 hours or more at a stretch, or waking up from a nap dry.',
          'Telling you they need to go, or telling you afterward that they went. Even the '
            + 'afterward version counts, because it means they noticed.',
          'Bowel movements that come at roughly predictable times rather than at random.',
          'Interest in the bathroom, in the potty, in your underwear, in what the flush does.',
          'Pulling pants down and back up, which sounds small and is the difference between '
            + 'making it and not.',
          'Following a simple 2 step instruction, such as go get your cup and bring it to me.',
          'Being bothered by a wet or dirty diaper rather than carrying on with it.',
          'Walking to the potty and sitting on it without a fight, even if nothing happens.',
        ],
      },
      {
        h: 'The average is later than people think',
        body: [
          'Most children finish daytime training somewhere between 2 and a half and 3 and a '
            + 'half, and the whole normal range runs from about 18 months to past 4. Your '
            + 'grandmother is not misremembering that it happened earlier in her day, it '
            + 'genuinely did, and diapers were cloth and washing them was somebody\'s whole '
            + 'afternoon.',
          'Here is the part that is worth knowing before you start. Children who begin much '
            + 'before 2 tend to take longer to finish, and they finish at roughly the same age as '
            + 'children who started later. Starting early mostly buys you more months of '
            + 'training, not an earlier finish. Pushing a child who is not ready usually costs '
            + 'you time rather than saving it, and it can cost you their willingness too, which '
            + 'is much harder to get back.',
        ],
      },
      {
        h: 'Reasons to wait a few weeks',
        body: [
          'None of these make potty training impossible. They just make it harder than it '
            + 'needs to be, and a hard start tends to leave a mark on how a child feels about the '
            + 'whole thing.',
        ],
        list: [
          'A new baby due, or a new baby who just arrived.',
          'A move, or a room change, or a new bed.',
          'Starting daycare, switching rooms, or a new teacher.',
          'A trip, a long drive, a vacation, or holidays at somebody else\'s house.',
          'Any illness, and the week after it.',
          'A parent traveling or working very long days, since this needs somebody available.',
          'A rough patch with sleep, biting, or big feelings. Pick one hard thing at a time.',
        ],
      },
      {
        h: 'If the pressure is coming from somewhere else',
        body: [
          'Plenty of preschools ask that a child be trained, and it is fair to ask them '
            + 'exactly what they mean, because some mean fully independent and some mean working '
            + 'on it and we will help. Their answer changes your timeline completely.',
          'If the deadline is real, start early enough that you can go slowly. A gradual '
            + 'approach over 2 months is kinder and more reliable than a panicked week in August.',
          'And if the pressure is coming from a relative with opinions, you are allowed to '
            + 'say we are waiting until she is ready and change the subject.',
        ],
      },
    ],
  },
  {
    id: 'how',
    label: 'How to start',
    sections: [
      {
        h: 'Set up first, start second',
        body: [
          'An hour of setup saves you days. Most of what goes wrong in the first week is '
            + 'equipment and clothing rather than the child.',
        ],
        list: [
          'A floor potty or a seat insert, plus a step stool. Feet planted on something is '
            + 'not a detail. A child dangling from a full size toilet cannot push, which matters '
            + 'enormously for poop.',
          'Put the potty where they already spend time for the first days. The bathroom is '
            + 'the goal, not the starting line.',
          'Elastic waists only. No buttons, no snaps, no overalls, no tights. Whatever they '
            + 'can get down alone in 5 seconds.',
          'Let them pick the underwear. It is a small thing that buys real cooperation.',
          'Keep 3 changes of clothes wherever you are, a towel on the car seat and the couch, '
            + 'and paper towels somewhere you can reach without leaving them.',
          'Tell daycare the day you start, and ask what they can actually do. A center that '
            + 'keeps putting a diaper on at nap is not sabotaging you, that is usually their '
            + 'policy, and it is fine.',
          'Decide in advance what you will say at the first accident, because you will say '
            + 'something and you would rather choose it now.',
        ],
      },
      {
        h: 'The 3 day intensive',
        body: [
          'Diapers come off at home and stay off. They are bare bottomed or in underwear, you '
            + 'offer the potty constantly, and you clean up whatever happens without drama. Most '
            + 'of the learning comes from them feeling it start and getting there in time.',
          'What it actually demands of you: 3 clear days at home with one adult whose only '
            + 'job is this. Not working from home, not folding laundry between prompts. You will '
            + 'be watching a child almost continuously and mopping a lot on day 1. It is intense '
            + 'and short, which is exactly why some parents love it.',
          'Who it suits: a child who is clearly showing the readiness signs, a family with a '
            + 'real long weekend, and a parent who would rather have 3 awful days than 6 patchy '
            + 'weeks. It suits a child who is not yet ready very badly, because 3 days of '
            + 'pressure with nothing clicking is where power struggles get born.',
          'Fair warning that the 3 days is marketing. Most families who do this well are '
            + 'still having accidents in week 2, and out and about takes longer than at home. '
            + 'Treat it as a fast start rather than a finish line.',
        ],
      },
      {
        h: 'The gradual way',
        body: [
          'Diapers stay on at first. You add potty sitting into the day at the times '
            + 'something is likely, such as after waking, 20 minutes after meals, and before the '
            + 'bath. No pressure, no requirement to produce anything. Then underwear for part of '
            + 'the day, then more of the day, then all of it.',
          'What it demands of you: patience over weeks or months instead of intensity over '
            + 'days, and consistency from anybody else who has them. It is much easier to run '
            + 'alongside a job and daycare, and much easier to keep calm inside.',
          'Who it suits: most working families, any child who digs in when pushed, second and '
            + 'third children, and anybody who has already had a hard attempt and needs this to '
            + 'feel low stakes again.',
        ],
      },
      {
        h: 'Child led',
        body: [
          'You put everything in place, you name what is happening, you answer questions, and '
            + 'then you genuinely wait. They ask for underwear when they want underwear. This is '
            + 'the oldest of the mainstream approaches and the one with the least conflict in it.',
          'What it demands of you: the ability to not mind. If you are counting weeks or '
            + 'fielding comments from family, this one is harder than it looks, because the whole '
            + 'method is that you do not push.',
          'Who it suits: a strong willed child, a family with no deadline, and a parent who '
            + 'is at peace with the possibility that it happens closer to 3 and a half. It suits '
            + 'a looming preschool start much less well.',
        ],
      },
      {
        h: 'What to say',
        body: [
          'Short, calm, and about the body rather than about being good. These are just words '
            + 'that work, borrow whichever ones fit your mouth.',
        ],
        list: [
          'Instead of asking do you need to go, which gets a reflex no, say it is potty time, '
            + 'and then walk there together.',
          'Name the feeling for them: that squeeze in your tummy means pee is coming. You can '
            + 'put it in the potty.',
          'Give a choice that is not whether: do you want the little potty or the big one, do '
            + 'you want the door open or shut.',
          'When something lands in the potty, say what happened rather than how proud you '
            + 'are. You felt it coming and you got here. That is the skill.',
          'At an accident: pee goes in the potty. Let us get dry clothes. Said once, flatly, '
            + 'then move on.',
          'When they say no: okay, the potty is here when you need it, and mean it.',
          'For poop specifically: I will stay with you. You can hold my hand. Poop can feel '
            + 'strange and having somebody there is often the whole fix.',
        ],
      },
      {
        h: 'The first accident sets the tone',
        body: [
          'It is coming, probably within the hour. What you want is boring. A calm sentence, '
            + 'dry clothes, back to what you were doing. No lecture, no sighing, no talk about '
            + 'big kids or babies.',
          'Let them help if they want to, bringing the wipes or dropping clothes in the '
            + 'basket. Help is not punishment as long as your face stays kind, and it stops being '
            + 'help the second it becomes a consequence.',
          'Expect 6 to 10 accidents on the first full day of underwear and fewer each day '
            + 'after. If it is still a dozen a day after a week, that is information rather than '
            + 'failure, and it usually means either not quite ready yet or constipation in the '
            + 'background. Both are fixable and neither is anybody\'s fault.',
        ],
      },
      {
        h: 'Rewards, honestly',
        body: [
          'They work well for some children and they backfire for others, and there is no way '
            + 'to know which yours is until you try. That is a less satisfying answer than the '
            + 'internet gives, and it is the true one.',
          'When they work, it is because a 2 year old needs a reason to stop playing, and a '
            + 'sticker is a reason. Keep it immediate, small, and the same every time. A sticker '
            + 'on a chart in the bathroom beats a toy at the end of the week, because a week is '
            + 'forever at this age.',
          'When they backfire, it looks like this: the reward becomes the point, they start '
            + 'negotiating, they sit down for 4 seconds to collect, or they get so wound up about '
            + 'earning it that they cannot relax enough to go. Some children also feel the weight '
            + 'of your hope in it and withdraw. If any of that is happening, drop the rewards '
            + 'entirely and say nothing about why. It is not a step backward.',
          'Either way, keep praise about the doing rather than about them. You got here in '
            + 'time works better over months than you are such a good girl, because nothing about '
            + 'a body learning a new job should feel like a grade.',
        ],
      },
    ],
  },
  {
    id: 'boys',
    label: 'Boys',
    sections: [
      {
        h: 'Sitting first, standing later',
        body: [
          'Teach him to sit for everything at the start. Pee and poop often arrive together '
            + 'at this age, and a boy who only ever stands to pee gets no practice at the harder '
            + 'half of the job. Sitting also means far less cleaning while his aim is '
            + 'theoretical.',
          'Standing can come once sitting is reliable, and there is no hurry about it. Plenty '
            + 'of boys switch when they see a friend or a dad do it, and that is a fine reason. '
            + 'Feet on a stool at the toilet, or a floor potty, so he is not on tiptoe.',
        ],
      },
      {
        h: 'Aim, and the cleaning up',
        body: [
          'The practical fixes are unglamorous and they work.',
        ],
        list: [
          'Sitting down, teach him to press gently down between his legs with his hand so the '
            + 'stream goes into the bowl rather than out through the gap at the front.',
          'Standing up, something to aim at helps a lot. A square of toilet paper floating in '
            + 'the water, or a few drops of food coloring so he can watch it change. Cheerios are '
            + 'the classic and they do work.',
          'Close enough to the bowl that he is touching it. Distance is where the mess comes '
            + 'from.',
          'Expect to wipe the seat, the rim and the floor for months. Keep a cloth or wipes '
            + 'within his reach and let him do some of it, calmly, as part of the routine rather '
            + 'than as a consequence.',
          'He still needs to wipe after poop, and boys often get taught this less carefully '
            + 'than girls. Front, then bottom, and a hand wash every single time.',
        ],
      },
      {
        h: 'If he is not circumcised',
        body: [
          'Nothing special is needed for potty training, and one thing matters: never force '
            + 'the foreskin back. It is attached in early childhood and separates on its own, '
            + 'often not until school age or later, and forcing it hurts and can cause scarring.',
          'Wash the outside with water, that is all. If it retracts easily on its own by the '
            + 'time he is older, he can rinse underneath and then pull it back forward, and he '
            + 'can learn that when it happens rather than now.',
          'Worth a call if the tip looks red and swollen, if it balloons out when he pees, if '
            + 'peeing seems to hurt, or if the stream is a thin dribble rather than a stream.',
        ],
      },
      {
        h: 'On boys taking a little longer',
        body: [
          'On average boys finish a few months after girls, and the spread inside each group '
            + 'is so much bigger than the gap between them that the average tells you nothing '
            + 'about your son. Some boys are done at 2 and a half and some are 3 and a half, and '
            + 'both are normal.',
          'The one thing that does show up more often in boys is holding poop while doing '
            + 'fine with pee. If that is where you are, the setbacks tab is the place to go '
            + 'rather than trying harder at this one.',
        ],
      },
    ],
  },
  {
    id: 'girls',
    label: 'Girls',
    sections: [
      {
        h: 'Wiping, front to back, every time',
        body: [
          'This is the one genuinely different skill, and it is worth teaching slowly because '
            + 'the habit lasts her whole life. Front first, then back, and never the other '
            + 'direction, because that is how bacteria from the bottom gets to where it causes a '
            + 'urinary infection.',
          'She will not be good at it for a long time, and that is expected. Most children '
            + 'cannot wipe well on their own until somewhere around 4 or 5, and helping her is '
            + 'not babying her. Let her go first and then check, rather than taking the job away.',
          'Flushable is a claim rather than a fact for most wipes and they clog pipes, so '
            + 'plain toilet paper is easier all around. Hands washed with soap afterward, every '
            + 'time, including at the babysitter and at daycare.',
        ],
      },
      {
        h: 'Urinary infections, and what they look like',
        body: [
          'Girls get these more often than boys because the distance from the outside to the '
            + 'bladder is shorter. They are common, they are treatable, and they need a doctor '
            + 'because they need a urine test, not a guess.',
          'Some worth knowing: sitting fully back on the seat with feet supported so she can '
            + 'relax rather than hover, not rushing her, and letting her take the time to empty '
            + 'properly. Not holding it all afternoon because she is busy. If your pediatrician '
            + 'has raised bubble baths or scented soaps with you, follow their advice on that, '
            + 'since it comes up in some children and not others.',
        ],
        list: [
          'Pain, burning or crying when she pees.',
          'Going constantly, or a sudden desperate urgency.',
          'Cloudy, dark, or strong smelling urine.',
          'Blood in the urine or on the underwear.',
          'Fever, or pain low in the tummy or in the back near the sides.',
          'Wetting again during the day after she had stopped.',
          'In a younger toddler it can be vaguer than any of that: a fever with nothing else, '
            + 'off her food, unusually cranky or tired.',
          'Any of these is a call to the pediatrician the same day rather than something to '
            + 'watch.',
        ],
      },
      {
        h: 'Girls often start a bit earlier, and the spread is enormous',
        body: [
          'On average girls train a few months sooner than boys. That average is real and it '
            + 'is also nearly useless for one child, because the range inside girls alone runs '
            + 'from before 2 to past 3 and a half.',
          'So if your daughter is 3 and not interested while a friend\'s daughter finished at '
            + '2, nothing is wrong. Compare her to her own readiness signs, not to somebody '
            + 'else\'s child.',
        ],
      },
      {
        h: 'The practical bits',
        body: [
          'Dresses are easier than pants in the early weeks, and tights are the hardest thing '
            + 'in the world. Skip them until this is settled.',
          'Show her how to sit right back on the seat rather than perching on the edge, and '
            + 'use a seat insert if the opening feels big to her. Falling in once, or believing '
            + 'she might, is enough to put a child off the toilet for weeks.',
          'Public restrooms are loud and the automatic flush startles children. A sticky note '
            + 'or a square of paper over the sensor stops it flushing underneath her, and that '
            + 'trick has saved a lot of outings.',
        ],
      },
    ],
  },
  {
    id: 'setbacks',
    label: 'Accidents and setbacks',
    sections: [
      {
        h: 'Going backward is part of the normal shape of this',
        body: [
          'Almost every child who trains has a stretch where it falls apart. It is not lost '
            + 'ground and it is not defiance, and it very rarely means you have to start over.',
          'The usual causes are plain once you look: a new baby, a move, starting daycare, a '
            + 'new bed, a parent away, any illness, travel, or simply being so absorbed in '
            + 'playing that the signal arrives too late. Regression around a new sibling is close '
            + 'to universal and it passes.',
          'What helps is boring consistency and less attention on it, not more. Go back to '
            + 'offering the potty at predictable times, keep your voice flat about accidents, and '
            + 'let the regression run out of road. If it lasts more than 2 or 3 weeks, or it '
            + 'started out of nowhere with no life event behind it, read the next section and '
            + 'then call.',
        ],
      },
      {
        h: 'Constipation is the hidden cause underneath most of this',
        body: [
          'This is the single most useful thing on this screen. A large share of daytime '
            + 'accidents, sudden wetting, and children who will use the potty for pee but not '
            + 'poop come down to constipation, and most families have no idea it is there because '
            + 'the child is still going.',
          'A stool backed up in the rectum presses on the bladder and dulls the signal, so '
            + 'pee arrives with no warning. It also makes going hurt, and a child who was hurt '
            + 'once will hold it, which backs things up further. That loop is where the hardest '
            + 'potty training stories live.',
          'You cannot fix this by trying harder at training, and you should not treat it on '
            + 'your own either. Call the pediatrician, describe what you are seeing, and ask '
            + 'about constipation specifically. It is common, it is very treatable, and once it '
            + 'is sorted the accidents often stop on their own.',
        ],
        list: [
          'Poop that is hard, dry, or in small pellets.',
          'Fewer than 3 in a week, or a huge one after several quiet days.',
          'Straining, going red, crying, or saying it hurts.',
          'Standing on tiptoe, crossing legs, stiffening up, or hiding to hold it in.',
          'Streaks or smears in the underwear, which look like not wiping and are often '
            + 'overflow around a blockage.',
          'A tummy that hurts on and off, or a poor appetite.',
          'Blood on the paper or on the outside of the stool, from a small tear.',
          'Pee accidents that arrive with no warning at all in a child who had been dry.',
        ],
      },
      {
        h: 'When they hold their poop',
        body: [
          'Withholding is fear, not stubbornness. Something hurt once, or the flush is '
            + 'alarming, or a poop felt like losing a part of themselves, and the answer their '
            + 'brain landed on is to keep it in.',
          'Take the pressure off first. Let them poop in a diaper if that is where they are, '
            + 'even if pee is going in the potty. Many children get there in stages, sometimes '
            + 'standing in the bathroom in a diaper, then sitting on the potty with the diaper '
            + 'on, then with it loosened, then without. That path works and it takes weeks, not '
            + 'days.',
          'Feet on a stool, knees higher than hips, and somebody staying with them. Then talk '
            + 'to the pediatrician, because by the time a child is holding, there is usually '
            + 'constipation to sort out as well and the fear will not lift while going still '
            + 'hurts.',
        ],
      },
      {
        h: 'Fear of the toilet',
        body: [
          'It is a loud object with a hole in it that makes things disappear, and it is '
            + 'bigger than they are. Common fears are the flush, falling in, and the water '
            + 'moving.',
          'Let them flush after they are off the seat, or flush it yourself once they are out '
            + 'of the room. A floor potty avoids the whole question for a while, and using one is '
            + 'not a step down. A seat insert and a stool solve the falling in fear more reliably '
            + 'than any reassuring.',
          'Never flush while they are sitting there to prove it is fine. It teaches the '
            + 'opposite of the thing you were trying to teach.',
        ],
      },
      {
        h: 'What reliably makes it worse',
        body: [
          'None of this is a judgment on anybody. Every parent has done at least one of these '
            + 'at the end of a long day, including people who write parenting content.',
        ],
        list: [
          'Punishment, time outs, or losing a privilege over an accident. It reads as unsafe, '
            + 'not as motivating, and it drives holding.',
          'Shame. Comments about being a baby, about smelling, or in front of siblings or '
            + 'other adults. Children hide accidents rather than report them, and hidden '
            + 'accidents are where infections and constipation get missed.',
          'Big visible disappointment, including the sigh. Your face is the thing they read.',
          'Making them sit there until something happens. A potty should never be a place you '
            + 'are kept.',
          'Asking do you need to go 40 times an hour. It turns into a script they say no to.',
          'Starting over from scratch every time there is a bad week.',
          'Comparing them out loud to a sibling or a friend who did it sooner.',
        ],
      },
    ],
  },
  {
    id: 'night',
    label: 'Nights',
    sections: [
      {
        h: 'Night dryness is not something you can train',
        body: [
          'This is the part almost nobody is told plainly. Staying dry overnight depends on 3 '
            + 'things that arrive on their own schedule: the brain making enough of a hormone '
            + 'that slows urine production while they sleep, a bladder big enough to hold the '
            + 'night, and the ability to wake up or hold on when it is full. Not one of those '
            + 'responds to practice, rewards, or a rule about drinks.',
          'So a child in underwear all day who soaks the bed every night has not gone '
            + 'backward and is not being lazy. Daytime and nighttime are 2 different '
            + 'developments, and the gap between them is normal and often long.',
        ],
      },
      {
        h: 'How long the gap usually is',
        body: [
          'Months to years. Roughly 1 in 5 children still wet the bed at 5, about 1 in 10 at '
            + '7, and a small number into the teens. It runs strongly in families, so if a parent '
            + 'was late to be dry at night, that is the most likely explanation for their child '
            + 'being late too.',
          'Deep sleepers are heavily represented. So are children who are constipated, which '
            + 'is worth checking here too. A child who has never had a dry night is in a very '
            + 'different situation from one who was dry for 6 months and started again, and the '
            + 'second one is the one to mention to a doctor sooner.',
        ],
      },
      {
        h: 'What actually helps in the meantime',
        body: [
          'Mostly you are managing laundry and protecting how they feel about it, and that is '
            + 'a real job rather than giving up.',
        ],
        list: [
          'A waterproof mattress protector, and a second one under the first with a sheet '
            + 'between if you want to strip one layer in the dark and be done.',
          'Overnight training pants are fine and they are not a failure. Some children do '
            + 'better without them because they notice more, so it is worth a week each way once '
            + 'they are close.',
          'A normal bedtime pee, and a lit path to the bathroom so getting there alone is '
            + 'possible.',
          'You do not have to restrict drinks in any serious way. Easing off large amounts '
            + 'right at bedtime is reasonable, and a thirsty child should drink.',
          'Never wake a child to pee on your schedule. It does not speed up the hormone or '
            + 'the bladder, and it costs everybody sleep.',
          'Keep it entirely private. No mention in front of siblings, no announcement at '
            + 'sleepovers. Let them help change the sheets only if they want to, and never as a '
            + 'consequence.',
          'Say out loud that their body is still growing into this and it is not their fault. '
            + 'Children assume it is their fault, and hearing otherwise from you matters more '
            + 'than anything else on this list.',
        ],
      },
      {
        h: 'When it is worth raising',
        body: [
          'Most guidance holds off on doing anything about bedwetting before about 5, because '
            + 'so much of it resolves on its own. Around 5 to 7 is when it is reasonable to bring '
            + 'up with the pediatrician, and by 7 it is worth an actual conversation rather than '
            + 'more waiting. There are real options at that point, including alarms and '
            + 'medication, and a doctor can also check for the things that make it worse.',
          'Bring it up sooner than that, at any age, if there is daytime wetting alongside '
            + 'it, if it hurts to pee or the urine smells strong, if they are snoring heavily or '
            + 'breathing through their mouth all night, if a child who was dry for months starts '
            + 'again, if they are drinking and peeing far more than usual, or if they are '
            + 'embarrassed and upset by it. A child who is distressed is reason enough on its '
            + 'own, whatever their age.',
        ],
      },
    ],
  },
  {
    id: 'doctor',
    label: 'When to ask',
    sections: [
      {
        h: 'Call the same day',
        body: [
          'None of these are potty training questions. They are medical ones, and they are '
            + 'common and treatable.',
        ],
        list: [
          'Pain, burning, or crying when they pee.',
          'Blood in the urine, in the toilet, or on the underwear.',
          'Fever with any of the above, or pain in the back near the sides.',
          'Cloudy or strong smelling urine with new wetting.',
          'A swollen, red, or painful penis or vulva, or a stream that is a dribble rather '
            + 'than a stream.',
          'Severe tummy pain, vomiting, or no poop at all with a hard swollen belly.',
          'Drinking and peeing far more than usual, especially with weight loss or new tiredness.',
        ],
      },
      {
        h: 'Worth an appointment, not an emergency',
        body: [
          'These are the ones to put on the list for the next visit, or to call about this '
            + 'week if they are wearing everybody down.',
        ],
        list: [
          'Constipation that is not shifting after a week or 2 of the usual measures, or that '
            + 'keeps coming back. Ask about it directly rather than waiting for it to be raised.',
          'Holding poop, or a child who will use the potty for pee and not for poop for more '
            + 'than a few weeks.',
          'No interest at all and no progress by around 3, and definitely by 4. Not because '
            + 'they are behind, but because it is worth ruling out anything physical before '
            + 'another attempt.',
          'A child who was trained for months and suddenly is not, with no new baby, move, or '
            + 'other obvious reason behind it. Sudden regression in a previously reliable child '
            + 'is the one that most often turns out to have a cause.',
          'Accidents many times a day, every day, weeks into training.',
          'Daytime wetting in a child who had been dry for 6 months or more.',
          'Still wetting the bed at 7, or earlier if they are upset about it.',
          'Straining, a weak stream, dribbling afterward, or needing to go again 2 minutes later.',
          'Anything that seems to be about fear rather than skill, and is not easing with the '
            + 'gentle approaches.',
        ],
      },
      {
        h: 'Your own gut counts as a reason',
        body: [
          'You do not need a list to justify a phone call. You know how this child usually '
            + 'is, and noticing that something is off is exactly the kind of information a '
            + 'pediatrician wants.',
          'It also helps to bring specifics: how many accidents a day, what the poop looks '
            + 'like and how often, when the change started, and what has already been tried. A '
            + 'week of notes on your phone is worth more than any description from memory.',
          'Nobody in that office will think you called over nothing. They would far rather '
            + 'see a child who turns out to be fine.',
        ],
      },
    ],
  },
];

export const POTTY_SOURCES = [
  { org: 'AAP, HealthyChildren',
    label: 'Toilet training, the whole section',
    url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/default.aspx' },
  { org: 'AAP, HealthyChildren',
    label: 'How to tell when your child is ready',
    url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/How-to-Tell-When-Your-Child-is-Ready.aspx' },
  { org: 'AAP, HealthyChildren',
    label: 'Constipation in children, the signs and what is done about it',
    url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx' },
  { org: 'AAP, HealthyChildren',
    label: 'How urinary tract infections are found and treated in children',
    url: 'https://www.healthychildren.org/English/health-issues/conditions/genitourinary-tract/Pages/Detecting-Urinary-Tract-Infections.aspx' },
  { org: 'AAP, HealthyChildren',
    label: 'Caring for an uncircumcised penis, and why not to force the foreskin back',
    url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Care-for-an-Uncircumcised-Penis.aspx' },
  { org: 'NIDDK, National Institutes of Health',
    label: 'Bedwetting in children, the causes and when it is treated',
    url: 'https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-control-problems-bedwetting-children' },
  { org: 'NIDDK, National Institutes of Health',
    label: 'Constipation in children',
    url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children' },
];

/* WHEN THIS SCREEN EXISTS AT ALL.
   From 15 months, because a parent starts reading about it well before
   they start doing anything about it, and up to 8 years, because night
   time is a separate skill and staying dry overnight is still within
   the ordinary range at 7. */
export function pottyShows(months) {
  return typeof months === 'number' && months >= 15 && months <= 96;
}

/* The pages for this child, with the one gender page that applies. A
   child whose record does not say gets both, since guessing would be
   worse than showing a little extra. */
export function pottyTabsFor(sex) {
  const s = String(sex || '').toLowerCase();
  return POTTY_TABS.filter((t) => {
    if (t.id === 'boys') return s !== 'female' && s !== 'girl' && s !== 'f';
    if (t.id === 'girls') return s !== 'male' && s !== 'boy' && s !== 'm';
    return true;
  });
}

/* One line for the row on their profile, which says where they probably
   are rather than where they should be. */
export function pottyRowSub(months) {
  if (typeof months !== 'number') return 'Readiness, starting, accidents and nights';
  if (months < 18) return 'What readiness actually looks like, before you start';
  if (months < 24) return 'The signs to look for, and why waiting is often faster';
  if (months < 36) return 'How to start, what to expect, and what to do about accidents';
  if (months < 48) return 'Accidents, setbacks, and the hidden cause nobody checks';
  if (months < 72) return 'Nights, accidents, and when it is worth asking a doctor';
  return 'Night time is its own skill, and this age is still within range';
}

/* ------------------------------------------------------------------
   WILLOW, IN THE CORNER

   Same rules as the rest of her tips. She speaks up once, after
   something actually logged, never twice inside the cool off, and the
   clinical part is the page's own sourced content rather than
   something written fresh for the bubble.
   ------------------------------------------------------------------ */
export const TIP_POTTY_START = {
  id: 'pottyStart',
  title: 'Something landed in the potty',
  lines: [
    'A first success is worth marking, and it is also normal for the next few days to look '
      + 'nothing like it. This goes in steps rather than a straight line, so tomorrow being worse '
      + 'is not the first one being a fluke.',
    'What helps most from here is timing rather than asking. Offer the potty after waking, '
      + 'about 20 minutes after meals, and before you leave the house, and say it is potty time '
      + 'instead of asking whether they need to go.',
    'Expect quite a few accidents in the first days and keep your reaction boring. A calm '
      + 'sentence and dry clothes teaches faster than anything you could say at length.',
  ],
  ask: 'They just used the potty for the first time. What should I do next, and what should I '
    + 'expect over the next week?',
  link: { label: 'Potty training', screen: 'potty' },
};

export const TIP_POTTY_ACCIDENTS = {
  id: 'pottyAccidents',
  title: 'A lot of accidents today',
  lines: [
    'Several in one day usually means the day was busy rather than that something has gone '
      + 'backward. If it keeps up past a few days, the most common hidden cause is constipation, '
      + 'which dulls the warning they get, and that is worth looking at before trying harder at '
      + 'training.',
    'The signs to look for are hard or pellet like poop, straining, fewer than 3 in a week, '
      + 'streaks in the underwear, or a tummy that hurts on and off. If any of that is there, it '
      + 'is a call to the pediatrician rather than something to fix at home.',
    'Whatever is behind it, keep your response flat and short. Accidents get better faster '
      + 'with less attention on them, not more, and nothing about this is a judgment on how you '
      + 'are doing.',
  ],
  ask: 'We had several accidents today. What could be going on, and is there anything I should check?',
  link: { label: 'Accidents and setbacks', screen: 'potty' },
};

export const TIP_POTTY_WIN = {
  id: 'pottyWin',
  title: 'That is a real run now',
  lines: [
    'That is a stretch of successes rather than a good day, which is the point where this '
      + 'starts to hold. You did the patient, boring, unglamorous part and it worked, and that '
      + 'deserves saying out loud to yourself as well as to them.',
    'Out and about and at daycare usually lag behind home by a few weeks, so pack spare '
      + 'clothes for a while yet and expect the odd surprise. It is not a step back when it '
      + 'happens.',
    'Nights are a separate thing and they run on their own clock, so a child solid all day '
      + 'can still need overnight pants for months or years. That is ordinary and it is not '
      + 'something you can train.',
  ],
  ask: 'They have had a good run with the potty. What usually comes next, and what should I not '
    + 'read too much into?',
  link: { label: 'Potty training', screen: 'potty' },
};

