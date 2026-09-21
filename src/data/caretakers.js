/**
 * Ready Set Grow: Whoever Is Actually Holding The Phone
 * ------------------------------------------------------------------
 * The app collected who somebody is to their child and then did
 * nothing with it. Six roles sat in Settings being ignored while every
 * screen quietly addressed a woman who had recently given birth.
 *
 * That is wrong twice over. It is wrong for the adoptive father shown
 * a bleeding log, and it is wrong for the grandmother raising a four
 * year old who never gets a word written for her.
 *
 * WHAT THIS FILE HOLDS
 * Guidance for each route into parenting, written the way the rest of
 * the app is written: what nobody tells you, what actually helps, and
 * the honest line about when something needs more than an app.
 *
 * THE RULE THAT GOVERNS ALL OF IT
 * Nothing here ranks these. There is no real parent and no second best
 * version. An adoptive parent is a parent, a step parent who does the
 * school run is doing the job, and a grandmother raising a child is
 * raising a child. The content says so by never implying otherwise,
 * not by announcing it.
 *
 * ON THE BODY CONTENT
 * Bleeding, stitches, blood pressure after birth: that is gated on
 * having given birth, not on having a baby. Everything else in the app
 * is for everybody.
 */

export const CARETAKER_ENTRIES = [

  {
    id: 'adoptive',
    role: 'adoptive',
    kind: 'Adoptive parents',
    title: 'The bit nobody warns adoptive parents about',
    blurb: 'Post adoption depression is real, and almost nobody mentions it',
    body:
      'A wait that took years ends, the child is finally home, and a good number of adoptive '
      + 'parents feel flat, panicked or numb instead of the joy everybody is waiting to see on their '
      + 'face. It has a name, post adoption depression, and studies put it somewhere around 1 in '
      + '5. Nobody warns people about it because the story says this is the happy ending.\n\n'
      + 'The guilt on top of it is the heavy part. You fought to get here, so feeling anything other '
      + 'than grateful feels like proof you were wrong to want it. It is not. It is a major life '
      + 'change, sleep loss, and a relationship being built from nothing, and those hit a nervous '
      + 'system the same way whoever carried the pregnancy.',
    helps: [
      'Say it out loud to one person who will not panic. The first telling is the hard one.',
      'Attachment is built rather than switched on. Weeks and months, not a moment.',
      'Find other adoptive parents. General parenting groups will not have language for this.',
      'The same treatments that work for postpartum depression work here, and you qualify for them.',
    ],
    getHelp: 'More than 2 weeks of it, or feeling disconnected from your child, is worth a call. '
      + 'Say the words post adoption depression. Providers who have not heard it before will look it up.',
  },

  {
    id: 'partner',
    role: 'partner',
    kind: 'Fathers and non birth partners',
    title: 'You can get postpartum depression too',
    blurb: 'Around 1 in 10 fathers, and almost nobody screens for it',
    body:
      'Paternal postnatal depression is well documented and sits at roughly 1 in 10, higher when '
      + 'the birth parent is also struggling. Nobody screens for it. The health visitor is watching '
      + 'the person who gave birth, and everyone else asks how she is doing.\n\n'
      + 'It also tends to look different. Less crying, more irritability, working late, drinking '
      + 'more, feeling shut out, or going quiet and functional while something drains away '
      + 'underneath. That mismatch is exactly why it gets missed for months, including by the person '
      + 'it is happening to.',
    helps: [
      'Get hands on early. Bathing, settling, the night shift. Competence and closeness build together.',
      'The feeling of being surplus when a baby is feeding constantly is common and it passes.',
      'Tell one friend the true version rather than the fine thanks version.',
      'Ask your own doctor, not hers. You are allowed to be the patient.',
    ],
    getHelp: '2 weeks or more of low mood, anger you did not have before, or pulling away from '
      + 'your family. The National Maternal Mental Health Hotline takes calls from partners too.',
  },

  {
    id: 'foster',
    role: 'foster',
    kind: 'Foster and kinship carers',
    title: 'Loving a child you might not keep',
    blurb: 'Holding on properly while knowing it may end',
    body:
      'The instruction to not get too attached is impossible and also bad advice. A child placed '
      + 'with you needs somebody who is fully in, and being fully in is what makes it hurt if they '
      + 'leave. Both of those are true at once and there is no arrangement of them that makes it '
      + 'comfortable.\n\n'
      + 'Kinship carers carry a second weight on top. The child arrived through a crisis in your own '
      + 'family, so you are grieving somebody while raising their child, often with less support and '
      + 'less money than a stranger placement would bring, and sometimes with the rest of the family '
      + 'having opinions about it.',
    helps: [
      'Behavior that looks like defiance is usually a nervous system that learned adults are not safe yet.',
      'Predictability does more than warmth alone. Same order, same words, same time.',
      'Keep a record of what you see. It matters at reviews and in court, and memory will not hold it.',
      'Kinship carers are often entitled to support they were never told about. It is worth asking twice.',
    ],
    getHelp: 'Trauma informed therapy for the child, and support for you. Carer burnout is the most '
      + 'common reason placements break down, and it is preventable when somebody notices in time.',
  },

  {
    id: 'step',
    role: 'step',
    kind: 'Step parents',
    title: 'You are not their parent and you are not nothing',
    blurb: 'The role with no script and no name',
    body:
      'Step parenting has the least clear job description in the house. Push too hard and you are '
      + 'overstepping. Stay back and you are not pulling your weight. The child may be grieving a '
      + 'family that ended, and some of that lands on you for no reason except that you are here.\n\n'
      + 'What the research consistently finds is that the friend route works better than the '
      + 'authority route, particularly with older children. Warmth first, discipline through their '
      + 'parent, for a good while longer than feels natural.',
    helps: [
      'Let their parent hold the discipline early on. You are building the relationship that makes it possible later.',
      'Do not compete with the parent they already have, including the one who is not there.',
      'One thing that is just yours and theirs. A game, a walk, a Saturday breakfast.',
      'Years, not months. That is not failure, it is the normal timescale.',
    ],
    getHelp: 'If the household is in constant conflict, family therapy with a step family '
      + 'specialist is a different thing from general couples counseling and it works.',
  },

  {
    id: 'mixed',
    role: 'mixed',
    kind: 'Families put together more than one way',
    title: 'When your children came to you differently',
    blurb: 'One you gave birth to, one you did not, and the questions that follow',
    body:
      'Plenty of houses hold a child somebody gave birth to and a child who arrived another way, '
      + 'through adoption, through fostering, through a marriage, or through family. The children '
      + 'notice. They notice earlier than adults expect and they ask about it in the car, at bedtime, '
      + 'and in front of people you would rather they had not.\n\n'
      + 'The pressure people describe is a double one. Treat them identically and you are ignoring '
      + 'that one of them has a history the other does not. Treat them differently and you are '
      + 'confirming the thing they are worried about. The honest answer is that fairness is not '
      + 'sameness, and children work that out sooner than they are given credit for.',
    helps: [
      'Same rules and same consequences for everybody. That is the part that has to be identical.',
      'Different needs are allowed to get different responses, and saying so out loud beats pretending.',
      'A child\'s own story belongs to them. They decide who hears it, including which relatives.',
      'Head off the real brother question before somebody else asks it in front of them.',
      'Relatives who treat them differently is a conversation with the relative, not with the child.',
    ],
    getHelp: 'A therapist who works with adoption or foster care specifically, if the sibling '
      + 'relationship is genuinely painful rather than ordinarily annoying. General family therapy '
      + 'often misses what is actually going on here.',
  },

  {
    id: 'exchange',
    role: 'exchange',
    kind: 'Hosting an exchange student',
    title: 'Somebody else\'s teenager, in your house, for a year',
    blurb: 'Parenting without being their parent, in a language that is not theirs',
    body:
      'Hosting is a strange middle. You are responsible for them and you are not their parent, they '
      + 'are a guest and also a member of the household, and the whole thing has an end date that '
      + 'everybody can see coming.\n\n'
      + 'Homesickness usually lands around weeks 4 to 8, well after the excitement wears off '
      + 'and well before they feel at home. It often looks like withdrawal or rudeness rather than '
      + 'tears. Operating all day in a second language is also genuinely exhausting in a way that is '
      + 'easy to read as sullenness.',
    helps: [
      'Say the house rules out loud and early. What is obvious to you is not obvious across cultures.',
      'Let them keep their own food, their own faith, and their own way of doing things.',
      'Protect the calls home rather than worrying they stop them settling. They do not.',
      'Ask what they call the adults where they are from. Getting that wrong is a small daily friction.',
      'Plan the goodbye. An ending nobody prepared for is the part people still regret years later.',
    ],
    getHelp: 'Your placement organization has a local coordinator whose whole job is this. Use them '
      + 'early rather than once something has gone wrong.',
  },

  {
    id: 'solo',
    role: 'solo',
    kind: 'Doing this on your own',
    title: 'There is nobody to tap out to',
    blurb: 'What changes when every decision is yours',
    body:
      'Solo parenting is not partnered parenting with one person missing. The difference is that '
      + 'there is no handover. No one to take the 3am shift so you get 4 unbroken hours, no one '
      + 'to disagree with about whether this is normal, and nobody who saw what you just dealt with.\n\n'
      + 'The decision fatigue is the part people underestimate. Every choice, small and large, lands '
      + 'on the same person all day, and that runs a specific kind of tank dry.',
    helps: [
      'Build the rota before you need it. Asking in a crisis is much harder than asking on a Tuesday.',
      'Be specific when you ask. Wednesday from 6 to 8 gets said yes to, more support does not.',
      'Lower the bar on the days that need it. Safe and fed is a complete day.',
      'Other solo parents understand the shape of it in a way that partnered friends cannot.',
    ],
    getHelp: 'If you have nobody at all, that is worth saying to a provider or a health visitor '
      + 'plainly. Practical support exists and it is generally allocated to the people who ask.',
  },

  {
    id: 'guardian',
    role: 'guardian',
    kind: 'Grandparents and guardians',
    title: 'Raising a child the second time round',
    blurb: 'Doing it again, with a different body and a different world',
    body:
      'Grandparents raising grandchildren are doing the job at a stage of life planned for something '
      + 'else, usually after something went wrong for the child\'s parents. The grief for your own '
      + 'child sits underneath the daily work of raising theirs, and there is rarely anywhere to put it.\n\n'
      + 'On top of that the advice has changed since last time, sometimes for good reasons and '
      + 'sometimes not, and being told you are doing it wrong by somebody half your age who has '
      + 'raised no one is its own particular experience.',
    helps: [
      'What has genuinely changed: safe sleep, car seats and feeding guidance. Those are worth updating.',
      'What has not: children need somebody steady who keeps showing up. You already know how to do that.',
      'Legal standing matters for school and medical decisions, and it is worth sorting early.',
      'Kinship carer support groups exist and are full of people in exactly this position.',
    ],
    getHelp: 'Your own health is part of the child\'s plan now. Appointments you are putting off '
      + 'are part of the job, not time taken from it.',
  },
];

/* ------------------------------------------------------------------
 * WHAT APPLIES TO WHOM
 * ------------------------------------------------------------------ */

/**
 * shape: { roles: [], support: [], gaveBirth, hasChildren }
 * Nothing is inferred beyond what somebody actually ticked, apart from
 * the partner entry, which is offered to anybody who has a child and
 * has not said they gave birth to them.
 */
export function caretakerEntriesFor(shape) {
  const s = shape || {};
  const roles = Array.isArray(s.roles) ? s.roles : [];
  const support = Array.isArray(s.support) ? s.support : [];
  const out = [];

  CARETAKER_ENTRIES.forEach((e) => {
    if (e.id === 'solo') {
      if (support.indexOf('solo') !== -1) out.push(e);
      return;
    }
    if (e.id === 'foster') {
      if (roles.indexOf('foster') !== -1 || roles.indexOf('kinship') !== -1) out.push(e);
      return;
    }
    if (e.id === 'guardian') {
      if (roles.indexOf('kinship') !== -1 || roles.indexOf('guardian') !== -1) out.push(e);
      return;
    }
    if (e.id === 'mixed') {
      if (s.mixedArrivals) out.push(e);
      return;
    }
    if (e.id === 'exchange') {
      if (s.hasExchange) out.push(e);
      return;
    }
    if (e.id === 'partner') {
      /* Said outright, or implied by having a child and a partner while
         not being the one who gave birth. A grandmother raising a
         grandchild is neither, and was getting this by accident. */
      const said = roles.indexOf('partner') !== -1;
      const elsewhere = ['foster', 'kinship', 'guardian', 'birth']
        .some((r) => roles.indexOf(r) !== -1);
      const implied = s.hasChildren && !s.gaveBirth && !roles.length
        && support.indexOf('partner') !== -1;
      if (said || (implied && !elsewhere)) out.push(e);
      return;
    }
    if (roles.indexOf(e.role) !== -1) out.push(e);
  });
  return out;
}

export function caretakerEntry(id) {
  return CARETAKER_ENTRIES.filter((e) => e.id === id)[0] || null;
}

export const CARETAKER_IDS = CARETAKER_ENTRIES.map((e) => e.id);

export const CARETAKER_NOTE = 'Written for the route you actually took. Nothing in this app ranks '
  + 'these, and nothing in it treats one of them as the real version.';
