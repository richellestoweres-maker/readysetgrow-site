/**
 * Ready Set Grow: Before Kindergarten, A Week At A Time
 * ------------------------------------------------------------------
 * She asked for the years before school to stop being only "what a
 * structured day looks like" and start being something a parent can
 * actually do on a Tuesday: a few short lessons, new every week,
 * using what is already in the kitchen.
 *
 * So this is 12 weeks per age band, 3 lessons a week, plus 2 or 3
 * Spanish words and one sign. The week turns over on its own, counted
 * from the first time the family opened it, and it loops, because a
 * 2 year old doing week 1 again at 3 is doing a different thing.
 *
 * THE RULES THESE WERE WRITTEN TO
 * 1. Household items only. The most common way a parent gives up on
 *    this is deciding they have to buy something first.
 * 2. Nothing here is a deadline. Ages are ranges, and a lesson that
 *    does not land today is information, not a failure.
 * 3. Safety is written into the steps rather than left to a footnote.
 * 4. It never says a child is behind.
 */

export const EARLY_TITLE = 'This week';
export const EARLY_INTRO =
  '3 short lessons a week, plus a few Spanish words and a sign. Everything you need is already in '
  + 'the house, and new ones arrive every week.';

export const EARLY_BANDS = [
  { id: 'toddler', label: '18 months to 3', minMonths: 16, maxMonths: 36,
    sum: 'Short, physical and repeated. At this age the repetition is the lesson.' },
  { id: 'preschool', label: '3 to 4 and a half', minMonths: 36, maxMonths: 54,
    sum: 'Sounds rather than letter names, counting real things, and asking what they think will happen.' },
  { id: 'prek', label: 'The year before kindergarten', minMonths: 54, maxMonths: 78,
    sum: 'What kindergarten actually expects, including the parts nobody teaches, such as opening a lunchbox.' },
];

export const EARLY_WEEKS = {
  "toddler": [
    {
      "n": 1,
      "focus": "Naming what is already in the house",
      "lessons": [
        {
          "id": "t1a",
          "title": "Kitchen naming walk",
          "subject": "Words and talking",
          "minutes": "5 to 10",
          "need": [
            "A cup",
            "A spoon",
            "A dish towel"
          ],
          "steps": [
            "Hold up one thing and name it. Cup.",
            "Hand it to them and say it again.",
            "Wait. Say nothing for a slow count of 5.",
            "Do 3 things only, then put them away together."
          ],
          "teaches": "The pause after a word is where their own first words come from.",
          "easier": "Name one thing and let them carry it around.",
          "harder": "Add what it does. Cup for drinking."
        },
        {
          "id": "t1b",
          "title": "Clap your name",
          "subject": "Music",
          "minutes": "5 to 10",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Say their name in parts and clap each part.",
            "Do it again slowly and take their hands to clap with you.",
            "Clap your own name the same way.",
            "Stop after 4 or 5 goes."
          ],
          "teaches": "Hearing the beats inside a word, which is the skill underneath reading later.",
          "easier": "Just clap while you say it and let them watch.",
          "harder": "Clap the name of someone else in the house."
        },
        {
          "id": "t1c",
          "title": "Carry the heavy basket",
          "subject": "Body and moving",
          "minutes": "5 to 10",
          "need": [
            "A laundry basket",
            "Towels or clothes"
          ],
          "steps": [
            "Put a few towels in a basket so it has real weight.",
            "Ask them to carry it across the room to you.",
            "Take the towels out together and load it again.",
            "Say heavy and light as you go."
          ],
          "teaches": "Heavy work settles a wound up toddler and builds the whole body at once.",
          "easier": "One towel in the basket, or pushing it along the floor.",
          "harder": "Carry it to another room and back."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "agua",
            "en": "water",
            "say": "AH-gwah"
          },
          {
            "es": "hola",
            "en": "hello",
            "say": "OH-lah"
          }
        ],
        "tip": "Say agua every single time you hand them a drink today. Same word, same moment."
      },
      "sign": {
        "word": "More",
        "how": "Flatten your fingers against your thumb on both hands so each hand makes a closed beak, then tap the 2 fingertips together twice.",
        "use": "At snack time, before you give them the second piece. Show it, wait, then give it."
      }
    },
    {
      "n": 2,
      "focus": "Red and blue",
      "lessons": [
        {
          "id": "t2a",
          "title": "Sock color sort",
          "subject": "Colors",
          "minutes": "5 to 10",
          "need": [
            "Clean socks in 2 colors",
            "2 bowls or pans"
          ],
          "steps": [
            "Put a red sock in one bowl and a blue sock in the other.",
            "Hand them a sock and say where does this one go.",
            "Say the color every time, even when they get it wrong.",
            "Tip them all out and start again if they want."
          ],
          "teaches": "Sorting comes before naming, and it is the first real thinking job.",
          "easier": "Use 4 socks only, 2 of each color.",
          "harder": "Add a third color bowl."
        },
        {
          "id": "t2b",
          "title": "Red hunt",
          "subject": "Colors",
          "minutes": "5 to 10",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Walk around the room and find something red.",
            "Touch it and say red out loud.",
            "Ask them to find another red thing.",
            "Stop at 4 or 5 things."
          ],
          "teaches": "Color is a thing you notice, not a worksheet.",
          "easier": "You find them all and they just touch each one.",
          "harder": "Hunt for blue on the way back."
        },
        {
          "id": "t2c",
          "title": "Name what you hold",
          "subject": "Words and talking",
          "minutes": "5 to 10",
          "need": [
            "Anything you are already using"
          ],
          "steps": [
            "Every time you pass them something, say the color first.",
            "Blue cup. Red spoon.",
            "Wait after you say it.",
            "Keep it going through one meal."
          ],
          "teaches": "Words stick when they are attached to a thing in their hand.",
          "easier": "Stick to one color all day.",
          "harder": "Ask what color is this and let a wrong answer stand."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "rojo",
            "en": "red",
            "say": "ROH-hoh"
          },
          {
            "es": "azul",
            "en": "blue",
            "say": "ah-SOOL"
          }
        ],
        "tip": "Say the color in both languages when you hand them the cup. Red, rojo."
      },
      "sign": {
        "word": "Help",
        "how": "Make a fist with your thumb sticking up, rest it on your flat other palm, and lift both together.",
        "use": "The next time they are stuck and starting to shout. Make the sign, then help."
      }
    },
    {
      "n": 3,
      "focus": "Counting real things up to 5",
      "lessons": [
        {
          "id": "t3a",
          "title": "5 spoons on the table",
          "subject": "Numbers",
          "minutes": "5 to 10",
          "need": [
            "5 spoons"
          ],
          "steps": [
            "Lay the spoons in a line together.",
            "Touch each one as you count. 1, 2, 3, 4, 5.",
            "Then ask how many, and answer it yourself. 5 spoons.",
            "Let them mix them up and do it again."
          ],
          "teaches": "Touching each thing while you say the number is the whole foundation of counting.",
          "easier": "Use 3 spoons.",
          "harder": "Take one away and count what is left."
        },
        {
          "id": "t3b",
          "title": "Count the jumps",
          "subject": "Body and moving",
          "minutes": "5 to 10",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Jump together and count each jump out loud.",
            "Stop at 5 and say 5 jumps.",
            "Do 5 big stomps next.",
            "Finish with 5 slow claps."
          ],
          "teaches": "Numbers land faster when the body is doing the counting.",
          "easier": "Count 2 jumps and make a big deal of stopping.",
          "harder": "Let them say the numbers and you do the jumping."
        },
        {
          "id": "t3c",
          "title": "Pasta in the muffin tin",
          "subject": "Numbers",
          "minutes": "5 to 10",
          "need": [
            "A muffin tin",
            "Large dry pasta such as rigatoni"
          ],
          "steps": [
            "Sit with them, within arm's reach, the whole time.",
            "Put 1 piece in the first cup and say 1.",
            "Put 2 in the next cup, counting as they drop in.",
            "Go up to 4 or 5 cups, then tip it out."
          ],
          "teaches": "One number matched to one object, which is different from reciting numbers.",
          "easier": "Just fill and tip out, with you counting.",
          "harder": "Ask them to put 3 in a cup and see if they stop."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "uno",
            "en": "one",
            "say": "OO-noh"
          },
          {
            "es": "dos",
            "en": "two",
            "say": "DOHS"
          },
          {
            "es": "tres",
            "en": "three",
            "say": "TRESS"
          }
        ],
        "tip": "Count the stairs in Spanish on the way up. Same 3 words, every day."
      },
      "sign": {
        "word": "All done",
        "how": "Hold both hands up, palms toward you, fingers spread, then flip them over so the palms face away. Like shaking something off.",
        "use": "At the end of the meal, before the plate goes on the floor."
      }
    },
    {
      "n": 4,
      "focus": "Water, pouring and floating",
      "lessons": [
        {
          "id": "t4a",
          "title": "Pouring between 2 cups",
          "subject": "Science",
          "minutes": "5 to 10",
          "need": [
            "2 small cups",
            "A tray or a towel",
            "Water"
          ],
          "steps": [
            "Stay with them the whole time water is out.",
            "Fill one cup halfway and pour it into the other, slowly, without talking.",
            "Hand the cups over and let them spill it.",
            "Mop up together with a cloth."
          ],
          "teaches": "Careful hands and the first idea that the same water can change shape.",
          "easier": "Do it in the bath or the sink where spills do not matter.",
          "harder": "Add a small jug and a funnel shape such as a cut bottle top."
        },
        {
          "id": "t4b",
          "title": "Does it float",
          "subject": "Science",
          "minutes": "5 to 10",
          "need": [
            "A bowl of water",
            "A spoon",
            "A cork or a plastic lid",
            "A crayon"
          ],
          "steps": [
            "Stay beside the bowl the whole time.",
            "Hold up one thing and ask what do you think will happen.",
            "Drop it in together and say floats or sinks.",
            "Do 4 things, then let them play in the water."
          ],
          "teaches": "Guessing before you look is the start of real science thinking.",
          "easier": "Just drop things in and name floats or sinks yourself.",
          "harder": "Sort the wet things into 2 piles after, floaters and sinkers."
        },
        {
          "id": "t4c",
          "title": "Painting with water",
          "subject": "Body and moving",
          "minutes": "5 to 10",
          "need": [
            "A paintbrush or a clean sponge",
            "A cup of water"
          ],
          "steps": [
            "Go outside or use a tiled wall or a cardboard box.",
            "Dip the brush and make a big wet line.",
            "Let them paint wherever they can reach.",
            "Watch one line dry and say it disappeared."
          ],
          "teaches": "Big arm movements now are what make a pencil grip possible later.",
          "easier": "A sponge in a fist works better than a brush.",
          "harder": "Paint a circle, then a straight line down."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "agua",
            "en": "water",
            "say": "AH-gwah"
          },
          {
            "es": "mojado",
            "en": "wet",
            "say": "moh-HAH-doh"
          },
          {
            "es": "seco",
            "en": "dry",
            "say": "SEH-koh"
          }
        ],
        "tip": "Say mojado when their hands are wet and seco after the towel."
      },
      "sign": {
        "word": "Water",
        "how": "Make a W with your index, middle and ring fingers, and tap it on your chin.",
        "use": "Every time you fill their cup today, sign it before you hand it over."
      }
    },
    {
      "n": 5,
      "focus": "Shapes you can hold",
      "lessons": [
        {
          "id": "t5a",
          "title": "Circle hunt in the kitchen",
          "subject": "Numbers",
          "minutes": "5 to 10",
          "need": [
            "Jar lids",
            "A plate",
            "A cup"
          ],
          "steps": [
            "Put 3 round things on the table.",
            "Run their finger around the edge of each one and say circle.",
            "Go find one more round thing together.",
            "Line them all up, biggest to smallest."
          ],
          "teaches": "Feeling the edge of a shape teaches it better than looking at a picture of it.",
          "easier": "One lid, traced with their finger, several times.",
          "harder": "Find something with corners and say that one is not a circle."
        },
        {
          "id": "t5b",
          "title": "Posting into a box",
          "subject": "Numbers",
          "minutes": "5 to 10",
          "need": [
            "A cardboard box",
            "Jar lids",
            "A knife or scissors, used by you"
          ],
          "steps": [
            "Before they are up, cut one round hole in the box lid.",
            "Show them once, slowly, posting a jar lid through.",
            "Hand it over and say nothing while they try.",
            "Open the box and tip them out to start again."
          ],
          "teaches": "Matching a shape to a hole, which is early math and steady hands together.",
          "easier": "Make the hole bigger.",
          "harder": "Cut a second hole that is a square and see if they match them."
        },
        {
          "id": "t5c",
          "title": "Trace around a lid",
          "subject": "Body and moving",
          "minutes": "5 to 10",
          "need": [
            "Paper",
            "A chunky crayon",
            "A jar lid"
          ],
          "steps": [
            "Hold the lid still on the paper for them.",
            "Put the crayon in their fist and go around it with your hand over theirs.",
            "Lift the lid and say look, a circle.",
            "Let them scribble in it."
          ],
          "teaches": "Hand over hand tracing builds the wrist control that writing needs years from now.",
          "easier": "Skip the lid and just scribble together.",
          "harder": "Let them hold the lid and you hold the crayon."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "círculo",
            "en": "circle",
            "say": "SEER-koo-loh"
          },
          {
            "es": "caja",
            "en": "box",
            "say": "KAH-hah"
          }
        ],
        "tip": "Say círculo every time you trace one today. Repetition is the whole method."
      },
      "sign": {
        "word": "Again",
        "how": "One hand flat, palm up. The other hand bent, arcing over and tapping into that palm.",
        "use": "When they want the posting box emptied one more time, sign it with them before you do it."
      }
    },
    {
      "n": 6,
      "focus": "Beat, loud and quiet",
      "lessons": [
        {
          "id": "t6a",
          "title": "Pot and spoon drum",
          "subject": "Music",
          "minutes": "5 to 10",
          "need": [
            "An upturned pot",
            "A wooden spoon"
          ],
          "steps": [
            "Tap a slow steady beat and let them listen.",
            "Hand them the spoon and copy whatever they do.",
            "Tap loud, then tap quiet, and name each one.",
            "Finish with one big last tap."
          ],
          "teaches": "Keeping a beat and hearing loud against quiet, which is most of early music.",
          "easier": "Tap on their knees with your hands instead.",
          "harder": "Tap a pattern of 3 and see if they copy it."
        },
        {
          "id": "t6b",
          "title": "Fast and slow towels",
          "subject": "Music",
          "minutes": "5 to 10",
          "need": [
            "2 dish towels",
            "Music"
          ],
          "steps": [
            "Give them a towel and keep one yourself.",
            "Wave it high, then low, saying high and low.",
            "Wave fast, then very slow.",
            "Drop them on the floor at the end of the song."
          ],
          "teaches": "Fast and slow, high and low. Those pairs are the language music is made of.",
          "easier": "You wave and they watch and grab.",
          "harder": "Call out fast or slow and let them change on their own."
        },
        {
          "id": "t6c",
          "title": "Dance and freeze",
          "subject": "Body and moving",
          "minutes": "5 to 10",
          "need": [
            "Music"
          ],
          "steps": [
            "Put a song on and dance together.",
            "Stop the music and freeze, big and obvious.",
            "Start it again and carry on.",
            "Do it 4 or 5 times, then leave the music on."
          ],
          "teaches": "Stopping on a signal is self control practice dressed up as a game.",
          "easier": "You freeze and hold their hands still with you.",
          "harder": "Let them be the one who stops the music."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "música",
            "en": "music",
            "say": "MOO-see-kah"
          },
          {
            "es": "baila",
            "en": "dance",
            "say": "BYE-lah"
          }
        ],
        "tip": "Say baila as you put the song on, every time, until they move on the word."
      },
      "sign": {
        "word": "Play",
        "how": "Both hands in a Y shape, thumb and pinky out, and twist them back and forth at the wrist.",
        "use": "Use it when you sit down on the floor with them, so it means the same thing each time."
      }
    },
    {
      "n": 7,
      "focus": "Feelings that have names",
      "lessons": [
        {
          "id": "t7a",
          "title": "Faces in the mirror",
          "subject": "Feelings",
          "minutes": "5 to 10",
          "need": [
            "A mirror"
          ],
          "steps": [
            "Make a happy face in the mirror and say happy.",
            "Make a sad face and say sad.",
            "Ask them to make a happy face with you.",
            "Stop after 3 faces."
          ],
          "teaches": "Putting a name on a face is the first step to naming it in themselves.",
          "easier": "2 faces only, happy and sad.",
          "harder": "Add mad, and say what a mad body does."
        },
        {
          "id": "t7b",
          "title": "Find the sad one",
          "subject": "Feelings",
          "minutes": "5 to 10",
          "need": [
            "Any picture book with faces in it"
          ],
          "steps": [
            "Open to a page with a face on it.",
            "Point and say he looks sad. Wait.",
            "Turn the page and ask how does she feel.",
            "Answer it yourself if they do not, and move on."
          ],
          "teaches": "Feelings vocabulary comes from hearing the words used about someone else first.",
          "easier": "Point and name, with no question at all.",
          "harder": "Ask why they think the face is sad."
        },
        {
          "id": "t7c",
          "title": "Toy on the tummy",
          "subject": "Body and moving",
          "minutes": "5 to 10",
          "need": [
            "A small soft toy",
            "A rug"
          ],
          "steps": [
            "Lie down together on the floor.",
            "Put the toy on their tummy.",
            "Watch it go up and down and say up, down.",
            "Stay there for a minute, then get up."
          ],
          "teaches": "The first idea that a body can be settled on purpose rather than waiting it out.",
          "easier": "Do it with your hand on their tummy instead.",
          "harder": "Try 3 slow breaths in through the nose, out through the mouth."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "feliz",
            "en": "happy",
            "say": "feh-LEES"
          },
          {
            "es": "triste",
            "en": "sad",
            "say": "TREES-teh"
          }
        ],
        "tip": "Use them on the faces in the mirror, right after the English word."
      },
      "sign": {
        "word": "Happy",
        "how": "Flat hands brushing upward on your chest in circles.",
        "use": "Sign it when you are pleased to see them, at the start of the day and after a nap."
      }
    },
    {
      "n": 8,
      "focus": "Big body work",
      "lessons": [
        {
          "id": "t8a",
          "title": "Cushion mountain",
          "subject": "Body and moving",
          "minutes": "5 to 10",
          "need": [
            "Cushions",
            "Sofa cushions if you can spare them"
          ],
          "steps": [
            "Pile cushions on the floor in the middle of the room.",
            "Climb over them first so they see how.",
            "Stay close and let them climb it themselves.",
            "Knock it down together at the end."
          ],
          "teaches": "Climbing builds balance and the confidence to try something slightly hard.",
          "easier": "2 cushions flat on the floor to step over.",
          "harder": "Add a dish towel path to walk along without stepping off."
        },
        {
          "id": "t8b",
          "title": "Animal walks down the hall",
          "subject": "Body and moving",
          "minutes": "5 to 10",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Walk like a bear on hands and feet to the end of the hall.",
            "Hop back like a frog.",
            "Do a slow stomp like an elephant.",
            "Flop down at the end."
          ],
          "teaches": "Crossing the body in different ways, which supports coordination and later handwriting.",
          "easier": "One animal only, done 3 times.",
          "harder": "Let them pick the animal and copy them."
        },
        {
          "id": "t8c",
          "title": "Chase the flashlight",
          "subject": "Science",
          "minutes": "5 to 10",
          "need": [
            "A flashlight",
            "A dim room"
          ],
          "steps": [
            "Turn the lights down and shine a spot on the wall.",
            "Move it slowly and let them chase and pat it.",
            "Switch it off and say gone, then on again.",
            "Let them hold it and shine it on you."
          ],
          "teaches": "On, off, gone and back. Cause and effect that they control.",
          "easier": "Keep the spot low and still so it is easy to catch.",
          "harder": "Shine it on a thing and ask them to name it."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "salta",
            "en": "jump",
            "say": "SAHL-tah"
          },
          {
            "es": "luz",
            "en": "light",
            "say": "LOOSE"
          }
        ],
        "tip": "Say salta right before every jump today, so the word arrives with the action."
      },
      "sign": {
        "word": "Stop",
        "how": "Bring the edge of one flat hand down sharply onto your other flat palm.",
        "use": "Use it across the room instead of shouting, and use it the same way every time."
      }
    },
    {
      "n": 9,
      "focus": "Cold, warm and melting",
      "lessons": [
        {
          "id": "t9a",
          "title": "One big block of ice",
          "subject": "Science",
          "minutes": "5 to 10",
          "need": [
            "A cup of water frozen overnight",
            "A bowl",
            "A towel"
          ],
          "steps": [
            "Freeze water in a cup so the block is far too big for a mouth.",
            "Tip it into a bowl and let them touch it.",
            "Say cold, and say wet as it drips.",
            "Stay with them until it is put away."
          ],
          "teaches": "Water and ice are the same thing, which is a genuinely big idea at this age.",
          "easier": "Let them touch it for a second with your hand under theirs.",
          "harder": "Ask what do you think will happen if we leave it out."
        },
        {
          "id": "t9b",
          "title": "Warm hands, cold hands",
          "subject": "Words and talking",
          "minutes": "5 to 10",
          "need": [
            "A bowl of cool water",
            "A bowl of warm water"
          ],
          "steps": [
            "Test the warm water on your own wrist first so it is only warm.",
            "Put their hand in the cool one and say cold.",
            "Then the warm one and say warm.",
            "Swap back and forth a few times."
          ],
          "teaches": "Opposite words are learned through the body long before they are understood.",
          "easier": "Use one bowl and a cold spoon from the fridge.",
          "harder": "Ask which one is cold and let them point."
        },
        {
          "id": "t9c",
          "title": "Watch it melt",
          "subject": "Science",
          "minutes": "5 to 10",
          "need": [
            "A block of ice",
            "A plate"
          ],
          "steps": [
            "Put the ice on a plate on the table.",
            "Look at it together and say what you see.",
            "Go away and come back after lunch.",
            "Say it turned back into water."
          ],
          "teaches": "Waiting and then checking, which is the shape of every experiment they will ever do.",
          "easier": "Come back after 10 minutes instead.",
          "harder": "Put a second plate outside and compare the 2."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "frío",
            "en": "cold",
            "say": "FREE-oh"
          },
          {
            "es": "caliente",
            "en": "hot",
            "say": "kah-lee-EN-teh"
          }
        ],
        "tip": "Use caliente about their food every day. It is a word worth knowing early."
      },
      "sign": {
        "word": "Wait",
        "how": "Both hands up, palms up, fingers wiggling.",
        "use": "Use it while the ice melts, and again when they want something and you need a minute."
      }
    },
    {
      "n": 10,
      "focus": "The first letter of their name",
      "lessons": [
        {
          "id": "t10a",
          "title": "Their letter, big",
          "subject": "Letters",
          "minutes": "5 to 10",
          "need": [
            "Paper",
            "A chunky crayon"
          ],
          "steps": [
            "Write the first letter of their name, big, in front of them.",
            "Say the sound it makes, not the letter name.",
            "Run their finger down it.",
            "Stick it on the fridge and leave it up all week."
          ],
          "teaches": "Their own initial is the only letter worth teaching at this age, and it is the doorway.",
          "easier": "Just trace it with your finger and say the sound.",
          "harder": "Let them scribble over it with their own crayon."
        },
        {
          "id": "t10b",
          "title": "Find your letter",
          "subject": "Letters",
          "minutes": "5 to 10",
          "need": [
            "A cereal box",
            "Any packet from the cupboard"
          ],
          "steps": [
            "Hold the box where they can see the big writing.",
            "Find their letter on it and point.",
            "Say it is your letter, and say the sound.",
            "Look on one more packet, then stop."
          ],
          "teaches": "Letters live out in the world, not only on paper you made.",
          "easier": "You find it and they touch it.",
          "harder": "Let them look first while you wait."
        },
        {
          "id": "t10c",
          "title": "Walk the letter",
          "subject": "Body and moving",
          "minutes": "5 to 10",
          "need": [
            "Masking tape or painter's tape"
          ],
          "steps": [
            "Tape their letter on the floor, as big as the room allows.",
            "Walk along the lines while you say the sound.",
            "Let them walk it, crawl it or drive a car along it.",
            "Leave the tape down for a few days."
          ],
          "teaches": "Making the shape with the whole body is how the shape gets remembered.",
          "easier": "A single straight line to walk along.",
          "harder": "Add the first letter of a brother or sister's name."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "mira",
            "en": "look",
            "say": "MEE-rah"
          },
          {
            "es": "aquí",
            "en": "here",
            "say": "ah-KEE"
          }
        ],
        "tip": "Say mira before you point at anything today. It is a word that opens attention."
      },
      "sign": {
        "word": "Where",
        "how": "Index finger up, shaken side to side.",
        "use": "Use it while you hunt for their letter on the packets. Where is it."
      }
    },
    {
      "n": 11,
      "focus": "Books, over and over",
      "lessons": [
        {
          "id": "t11a",
          "title": "The same book again",
          "subject": "Words and talking",
          "minutes": "5 to 10",
          "need": [
            "The book they always pick"
          ],
          "steps": [
            "Let them choose, even if it is the ninth day of that one.",
            "Read it the same way, with the same voices.",
            "Leave the last word of a line for them to fill in.",
            "Stop when they get down."
          ],
          "teaches": "Repeating a familiar book is how a toddler moves from listening to joining in.",
          "easier": "Just turn the pages and name one thing on each.",
          "harder": "Stop before a favorite line and wait for them to say it."
        },
        {
          "id": "t11b",
          "title": "Point and wait",
          "subject": "Words and talking",
          "minutes": "5 to 10",
          "need": [
            "Any picture book"
          ],
          "steps": [
            "Point at one thing on the page and name it.",
            "Then point at another and say nothing at all.",
            "Count to 5 in your head before you fill the silence.",
            "Take whatever sound they make as the answer."
          ],
          "teaches": "The waiting after a question is where the talking actually comes from.",
          "easier": "Name everything yourself and let them point.",
          "harder": "Ask where is the dog and let them find it."
        },
        {
          "id": "t11c",
          "title": "Act out the story",
          "subject": "Body and moving",
          "minutes": "5 to 10",
          "need": [
            "A book with an animal or a vehicle in it"
          ],
          "steps": [
            "Pick one thing that happens in the book.",
            "Do it with your bodies. Stomp like the bear, drive like the truck.",
            "Say the words from the book while you do it.",
            "Go back and look at the page again."
          ],
          "teaches": "Acting a story out is how a toddler shows they understood it, long before they can tell you.",
          "easier": "One action only, done with you holding their hands.",
          "harder": "Do 2 things from the story in the right order."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "libro",
            "en": "book",
            "say": "LEE-broh"
          },
          {
            "es": "gato",
            "en": "cat",
            "say": "GAH-toh"
          }
        ],
        "tip": "Say libro every time you pick one up today, before the English word."
      },
      "sign": {
        "word": "Book",
        "how": "Put your palms together, then open them like a book while the little fingers stay touching.",
        "use": "Sign it as you sit down to read, so it becomes the signal that story time has started."
      }
    },
    {
      "n": 12,
      "focus": "Growing something on the windowsill",
      "lessons": [
        {
          "id": "t12a",
          "title": "Carrot top in a saucer",
          "subject": "Science",
          "minutes": "5 to 10",
          "need": [
            "The cut top of a carrot",
            "A saucer",
            "Water"
          ],
          "steps": [
            "Sit the carrot top cut side down in a saucer of shallow water.",
            "Put it on the windowsill where they can see it.",
            "Look at it together and say it is going to grow.",
            "Check it at the same time every morning."
          ],
          "teaches": "Something changing slowly, checked daily, which is a first lesson in patience and noticing.",
          "easier": "Look at it once a day and just say green or not yet.",
          "harder": "Start a second one in a dark cupboard and compare them."
        },
        {
          "id": "t12b",
          "title": "5 spoons of water",
          "subject": "Numbers",
          "minutes": "5 to 10",
          "need": [
            "A spoon",
            "A cup of water",
            "The saucer"
          ],
          "steps": [
            "Hand them the spoon and hold the cup steady.",
            "Count each spoonful out loud as it goes in. 1, 2, 3, 4, 5.",
            "Say 5 spoons, all done.",
            "Do the same 5 tomorrow."
          ],
          "teaches": "Counting attached to a real job they do every day, which is how numbers stop being a song.",
          "easier": "Count to 3 and stop.",
          "harder": "Ask how many spoons before you start, then count to check."
        },
        {
          "id": "t12c",
          "title": "Tell someone what grew",
          "subject": "Words and talking",
          "minutes": "5 to 10",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Take them to the windowsill together.",
            "Ask what happened to the carrot.",
            "Fill in the words they are missing, then let them try again.",
            "Get them to show it to somebody else in the house."
          ],
          "teaches": "Telling another person what happened is the beginning of describing, and it is a language lesson in disguise.",
          "easier": "They point and you do the telling.",
          "harder": "Ask what will happen next week."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "verde",
            "en": "green",
            "say": "VEHR-deh"
          },
          {
            "es": "más",
            "en": "more",
            "say": "MAHS"
          }
        ],
        "tip": "Say más when they want more water for the saucer, and when they want more food."
      },
      "sign": {
        "word": "Eat, or food",
        "how": "Fingers and thumb together in a beak, tap your fingertips to your mouth a couple of times.",
        "use": "Sign it before every meal this week, and when you talk about what a plant eats."
      }
    }
  ],
  "preschool": [
    {
      "n": 1,
      "focus": "The first sound in their name",
      "lessons": [
        {
          "id": "p1a",
          "title": "The sound at the start",
          "subject": "Letters",
          "minutes": "10 to 15",
          "need": [
            "Paper",
            "A marker"
          ],
          "steps": [
            "Write their name big on paper and say it slowly together.",
            "Say only the first sound. Mmm for Mia, not em.",
            "Walk the house and find 3 things that start with that sound.",
            "Say the sound every time you say their name today."
          ],
          "teaches": "The link between a sound they hear and a letter they see, starting with the word they care most about.",
          "easier": "Stay with 1 object and say the sound together 5 times.",
          "harder": "Ask them to think of a food that starts with the same sound."
        },
        {
          "id": "p1b",
          "title": "Strong hands first",
          "subject": "Writing",
          "minutes": "10 to 15",
          "need": [
            "Playdough, or flour, salt and oil to make it"
          ],
          "steps": [
            "Make a lump of dough together and let them squash it flat.",
            "Pinch off 10 small balls using only a thumb and one finger.",
            "Roll a long snake and curl it into the first letter of their name.",
            "Leave the pencils in the drawer today. This is the pencil lesson."
          ],
          "teaches": "The hand strength and finger control that has to come before a pencil is any use.",
          "easier": "Just squeeze, poke and pull it apart. No shapes required.",
          "harder": "Roll a snake for every letter in their name."
        },
        {
          "id": "p1c",
          "title": "A color for each feeling",
          "subject": "Feelings",
          "minutes": "10 to 15",
          "need": [
            "Paper",
            "Crayons"
          ],
          "steps": [
            "Name 4 feelings together. Happy, sad, cross, worried.",
            "Let them choose a color for each one. Their choice, not yours.",
            "Color a patch for each and say the feeling out loud as you go.",
            "Put the paper on the fridge and point at it during the week."
          ],
          "teaches": "A handle on feelings before they have the words for them.",
          "easier": "Do 2 feelings only, happy and cross.",
          "harder": "Ask what color they are right now, and answer for yourself first."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "hola",
            "en": "hello",
            "say": "OH lah"
          },
          {
            "es": "mamá",
            "en": "mom",
            "say": "mah MAH"
          },
          {
            "es": "papá",
            "en": "dad",
            "say": "pah PAH"
          }
        ],
        "tip": "Say it at the same moment every day, such as the first hello of the morning."
      },
      "sign": {
        "word": "Play",
        "how": "Both hands in a Y shape, thumb and pinky out, and twist them back and forth at the wrist.",
        "use": "Gives them a way to ask for your attention that is not pulling at you."
      }
    },
    {
      "n": 2,
      "focus": "Counting real things and knowing how many",
      "lessons": [
        {
          "id": "p2a",
          "title": "How many are there",
          "subject": "Numbers",
          "minutes": "10 to 15",
          "need": [
            "10 spoons",
            "A bowl"
          ],
          "steps": [
            "Line up 5 spoons and touch each one as you say the number.",
            "Ask how many there were, then wait for the answer.",
            "Count the same line the other way to show the number holds.",
            "Do it again with 7 spoons, then with 10."
          ],
          "teaches": "That counting out loud and knowing how many are 2 different skills, and the second is the real one.",
          "easier": "Stay at 3 objects until the answer comes easily.",
          "harder": "Cover the line after counting and ask how many are hiding."
        },
        {
          "id": "p2b",
          "title": "Will it float",
          "subject": "Science",
          "minutes": "10 to 15",
          "need": [
            "A bowl of water",
            "6 small things from the kitchen",
            "A dish towel"
          ],
          "steps": [
            "Fill a bowl with water and stay beside it the whole time.",
            "Before each thing goes in, ask will this float or sink.",
            "Drop it in and say out loud what actually happened.",
            "Make 2 piles on the counter, floaters and sinkers."
          ],
          "teaches": "Guessing first and then checking, which is the whole shape of science.",
          "easier": "Use 3 things and let them drop them in however they like.",
          "harder": "Ask why they think the heavy spoon went down."
        },
        {
          "id": "p2c",
          "title": "Tearing and pegging",
          "subject": "Writing",
          "minutes": "10 to 15",
          "need": [
            "Junk mail or old paper",
            "Clothespins",
            "A bowl"
          ],
          "steps": [
            "Tear a sheet of junk mail into strips, then into small pieces.",
            "Pick each piece up with a clothespin and drop it in the bowl.",
            "Count how many pieces the bowl holds at the end."
          ],
          "teaches": "The pinch grip, which is the same grip that will later hold a pencil.",
          "easier": "Tear only, and skip the clothespin.",
          "harder": "Use the clothespin in their other hand for a minute."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "uno",
            "en": "one",
            "say": "OO noh"
          },
          {
            "es": "dos",
            "en": "two",
            "say": "dohs"
          },
          {
            "es": "tres",
            "en": "three",
            "say": "trays"
          }
        ],
        "tip": "Count the stairs in Spanish on the way up, every time, until it is automatic."
      },
      "sign": {
        "word": "More",
        "how": "Flatten your fingers against your thumb on both hands so each hand makes a closed beak, then tap the 2 fingertips together twice.",
        "use": "Turns a whine at the table into a request you can actually answer."
      }
    },
    {
      "n": 3,
      "focus": "Hearing the parts inside a word",
      "lessons": [
        {
          "id": "p3a",
          "title": "Clap their name",
          "subject": "Music",
          "minutes": "10 to 15",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Say their name slowly and clap once for each chunk. Het, tie, lee.",
            "Let them clap it back with you 5 times.",
            "Clap the name of everyone in the house, including the dog.",
            "Clap a food at lunch. Ba, na, na."
          ],
          "teaches": "Hearing the parts inside a word, which is the skill sitting underneath reading.",
          "easier": "Use names with only 1 or 2 claps in them.",
          "harder": "Ask how many claps a word will have before you clap it."
        },
        {
          "id": "p3b",
          "title": "The next sound in it",
          "subject": "Letters",
          "minutes": "10 to 15",
          "need": [
            "Paper",
            "A marker"
          ],
          "steps": [
            "Write their name again and point to the second letter.",
            "Say that sound on its own, not the letter name.",
            "Find 2 things in the kitchen that start with that sound.",
            "Say both sounds in order, then say the whole name."
          ],
          "teaches": "That a name is made of sounds in an order, which is how reading works.",
          "easier": "Go back to the first sound and stay there another week.",
          "harder": "Say the sounds slowly apart and let them guess the word."
        },
        {
          "id": "p3c",
          "title": "A shape hunt",
          "subject": "Shapes",
          "minutes": "10 to 15",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Name one shape and draw it in the air with a finger. Circle.",
            "Walk the house and find 5 circles. Plates, the clock, coins.",
            "Ask what is round about each one.",
            "Do the same with squares tomorrow."
          ],
          "teaches": "That shapes live in the real world rather than on a page in a book.",
          "easier": "Find 2 circles and stop there.",
          "harder": "Let them trace each circle with a finger and name it."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "rojo",
            "en": "red",
            "say": "ROH hoh"
          },
          {
            "es": "azul",
            "en": "blue",
            "say": "ah SOOL"
          },
          {
            "es": "verde",
            "en": "green",
            "say": "BEHR day"
          }
        ],
        "tip": "Name the color of the cup in Spanish before you hand it over."
      },
      "sign": {
        "word": "Book",
        "how": "Put your palms together, then open them like a book while the little fingers stay touching.",
        "use": "Lets them ask for a story instead of dropping one in your lap while you cook."
      }
    },
    {
      "n": 4,
      "focus": "Rhyming, and more or fewer",
      "lessons": [
        {
          "id": "p4a",
          "title": "Words that sound the same",
          "subject": "Letters",
          "minutes": "10 to 15",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Say 2 words that rhyme. Cat and hat. Say them twice.",
            "Say a third and ask if it rhymes. Cat, hat, dog.",
            "Give them a word and take turns making silly rhymes for it.",
            "Do it in the car and at the sink all week."
          ],
          "teaches": "Hearing the end of a word, which is how children start to notice spelling patterns.",
          "easier": "You say both words and they only answer yes or no.",
          "harder": "Let them start the pair and you answer."
        },
        {
          "id": "p4b",
          "title": "More or fewer",
          "subject": "Numbers",
          "minutes": "10 to 15",
          "need": [
            "Dried pasta, if they no longer put things in their mouth",
            "2 bowls"
          ],
          "steps": [
            "Put 3 pieces of pasta in one bowl and 8 in the other.",
            "Ask which bowl has more, and let them look before counting.",
            "Count both and see who was right.",
            "Make them close, such as 5 and 6, and do it again."
          ],
          "teaches": "Comparing amounts, which is the idea sitting under all the math that comes later.",
          "easier": "Make the difference huge, such as 2 against 10.",
          "harder": "Ask how many more the bigger bowl has."
        },
        {
          "id": "p4c",
          "title": "Mixing 2 colors",
          "subject": "Colors",
          "minutes": "10 to 15",
          "need": [
            "Food coloring or paint",
            "Water",
            "A muffin tin or small cups"
          ],
          "steps": [
            "Put water in 3 cups and color them red, yellow and blue.",
            "Ask what they think red and yellow will make.",
            "Pour a little of each into an empty cup and look.",
            "Do blue and yellow next, then let them choose the pair."
          ],
          "teaches": "A prediction they can test in 10 seconds, and the first real experiment most children do.",
          "easier": "Do one mix only and talk about what happened.",
          "harder": "Ask them to guess before every mix and say why."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "sí",
            "en": "yes",
            "say": "see"
          },
          {
            "es": "no",
            "en": "no",
            "say": "noh"
          },
          {
            "es": "más",
            "en": "more",
            "say": "mahs"
          }
        ],
        "tip": "Use más at snack time and they will be using it back within a week."
      },
      "sign": {
        "word": "Again",
        "how": "One hand flat, palm up. The other hand bent, arcing over and tapping into that palm.",
        "use": "Ends the whining version of the same request."
      }
    },
    {
      "n": 5,
      "focus": "Sorting, matching and melting ice",
      "lessons": [
        {
          "id": "p5a",
          "title": "Sort by color",
          "subject": "Colors",
          "minutes": "10 to 15",
          "need": [
            "Clean laundry",
            "Or a box of crayons"
          ],
          "steps": [
            "Tip a basket of clean socks out on the floor.",
            "Ask them to put all the dark ones here and the light ones there.",
            "Then sort into color piles and name each pile out loud.",
            "Count the biggest pile at the end."
          ],
          "teaches": "Sorting by one rule, which comes before naming colors and before any math.",
          "easier": "Sort into 2 piles only.",
          "harder": "Let them choose the rule and you guess what it is."
        },
        {
          "id": "p5b",
          "title": "Matching lids and jars",
          "subject": "Shapes",
          "minutes": "10 to 15",
          "need": [
            "6 containers and their lids"
          ],
          "steps": [
            "Mix up 6 containers and their lids on the floor.",
            "Let them find the lid that fits each one.",
            "Talk about size and shape while they try. Too big, too round."
          ],
          "teaches": "Matching by shape and size, and the patience to try again when a lid does not fit.",
          "easier": "Use 3 containers with very different sizes.",
          "harder": "Add a lid that fits nothing and let them work that out."
        },
        {
          "id": "p5c",
          "title": "Ice and where it goes",
          "subject": "Science",
          "minutes": "10 to 15",
          "need": [
            "Ice cubes",
            "2 saucers"
          ],
          "steps": [
            "Put one ice cube on a saucer in a warm spot, one in the fridge.",
            "Ask which will disappear first, and why they think so.",
            "Check every 10 minutes and say what has changed.",
            "Ask where the water on the saucer came from."
          ],
          "teaches": "Watching a slow change and holding a prediction in their head while they wait.",
          "easier": "Use one cube in a bowl and just watch it.",
          "harder": "Try a third cube wrapped in a dish towel and compare all 3."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "agua",
            "en": "water",
            "say": "AH gwah"
          },
          {
            "es": "leche",
            "en": "milk",
            "say": "LEH chay"
          },
          {
            "es": "pan",
            "en": "bread",
            "say": "pahn"
          }
        ],
        "tip": "Say the Spanish word as you hand them the thing, every single time."
      },
      "sign": {
        "word": "Help",
        "how": "Make a fist with your thumb sticking up, rest it on your flat other palm, and lift both together.",
        "use": "Gives them something to do with a stuck feeling other than shout."
      }
    },
    {
      "n": 6,
      "focus": "Weather, shadows and their own name",
      "lessons": [
        {
          "id": "p6a",
          "title": "Weather at the window",
          "subject": "The world",
          "minutes": "5 to 10",
          "need": [
            "A window",
            "Paper",
            "A crayon"
          ],
          "steps": [
            "Go to the same window at the same time every morning.",
            "Ask what the weather is doing and say 2 sentences about it.",
            "Draw a tiny sun, cloud or raindrop on a strip of paper.",
            "At the end of the week, count how many days were sunny."
          ],
          "teaches": "Noticing something real and writing it down, which is where science starts.",
          "easier": "Say it out loud and skip the drawing.",
          "harder": "Ask what they should wear today because of it."
        },
        {
          "id": "p6b",
          "title": "Shadows on the ground",
          "subject": "Science",
          "minutes": "10 to 15",
          "need": [
            "A sunny day",
            "Chalk or a stone"
          ],
          "steps": [
            "Stand outside in the sun and find their own shadow.",
            "Ask what will happen to it if they move, then move.",
            "Mark where the shadow ends with chalk or a stone.",
            "Come back after lunch and see that it has moved."
          ],
          "teaches": "That light makes shadows and shadows change, both of which they can test with their own body.",
          "easier": "Make shadow shapes with hands and a lamp indoors.",
          "harder": "Ask why the shadow moved when they stood still."
        },
        {
          "id": "p6c",
          "title": "Writing their own name",
          "subject": "Writing",
          "minutes": "5 to 10",
          "need": [
            "Paper",
            "A chunky pencil"
          ],
          "steps": [
            "Write their name in big letters, a capital first then small ones.",
            "Let them trace over your letters with a finger, then with a pencil.",
            "Let them try one letter on their own underneath.",
            "Stop after 5 minutes whether or not it looks like anything."
          ],
          "teaches": "Their name as the first real word their own hand can make.",
          "easier": "Trace with a finger only, or write it in flour on a tray.",
          "harder": "Cover your version and let them try from memory."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "sol",
            "en": "sun",
            "say": "sohl"
          },
          {
            "es": "lluvia",
            "en": "rain",
            "say": "YOO vee ah"
          },
          {
            "es": "frío",
            "en": "cold",
            "say": "FREE oh"
          }
        ],
        "tip": "Say the weather word in Spanish at the window before you say it in English."
      },
      "sign": {
        "word": "Outside",
        "how": "Open hand near your chest, close it into a grabbing shape as you pull it outward and up.",
        "use": "The request that prevents the most afternoons from going wrong."
      }
    },
    {
      "n": 7,
      "focus": "Patterns you can see and hear",
      "lessons": [
        {
          "id": "p7a",
          "title": "Make a pattern",
          "subject": "Shapes",
          "minutes": "10 to 15",
          "need": [
            "Spoons and forks",
            "Or blocks in 2 colors"
          ],
          "steps": [
            "Lay out spoon, fork, spoon, fork along the table.",
            "Say it out loud while you point at each one.",
            "Ask what comes next and let them place it.",
            "Let them build one and you say what comes next."
          ],
          "teaches": "Spotting a rule and using it to predict, which is most of early math.",
          "easier": "Start the pattern again from the beginning after each piece.",
          "harder": "Try 3 things in a row, such as spoon, fork, cup."
        },
        {
          "id": "p7b",
          "title": "Clap the pattern back",
          "subject": "Music",
          "minutes": "5 to 10",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Clap a short pattern. Loud, loud, quiet.",
            "Ask them to clap it back exactly.",
            "Swap over and let them make one for you to copy.",
            "Try it with stamping feet instead of hands."
          ],
          "teaches": "Holding a pattern in their head long enough to repeat it, which is working memory.",
          "easier": "Use 2 claps only.",
          "harder": "Do 4 beats with a pause in the middle."
        },
        {
          "id": "p7c",
          "title": "Counting steps and stairs",
          "subject": "Numbers",
          "minutes": "5 to 10",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Count the stairs out loud every time you go up today.",
            "Ask how many there were once you reach the top.",
            "Count their steps across the kitchen, then count yours."
          ],
          "teaches": "Counting things that cannot be moved or lined up, which is harder than counting buttons.",
          "easier": "Count the first 5 stairs and stop.",
          "harder": "Ask whether the kitchen takes more of their steps or more of yours."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "casa",
            "en": "house",
            "say": "KAH sah"
          },
          {
            "es": "mesa",
            "en": "table",
            "say": "MEH sah"
          },
          {
            "es": "puerta",
            "en": "door",
            "say": "PWEHR tah"
          }
        ],
        "tip": "Touch the door and say puerta on the way out, every time, for a week."
      },
      "sign": {
        "word": "Wait",
        "how": "Both hands up, palms up, fingers wiggling.",
        "use": "A visible answer to a demand, which works far better than the word does."
      }
    },
    {
      "n": 8,
      "focus": "Growing something and where food starts",
      "lessons": [
        {
          "id": "p8a",
          "title": "Beans on cotton wool",
          "subject": "Science",
          "minutes": "10 to 15",
          "need": [
            "Dried beans",
            "Cotton wool or a paper towel",
            "A clear jar"
          ],
          "steps": [
            "Wet a paper towel and press it around the inside of a jar.",
            "Tuck a bean between the towel and the glass where they can see it.",
            "Ask what will happen and how many days it will take.",
            "Look every morning and say out loud what has changed."
          ],
          "teaches": "That living things change slowly, and that a prediction can take a week to check.",
          "easier": "Plant 3 beans so at least one of them is sure to work.",
          "harder": "Draw the bean each day on the same sheet of paper."
        },
        {
          "id": "p8b",
          "title": "Where food comes from",
          "subject": "The world",
          "minutes": "10 to 15",
          "need": [
            "3 foods from the fridge"
          ],
          "steps": [
            "Put 3 foods on the table and look at them together.",
            "Ask for each one, did this grow or did an animal make it.",
            "Sort them into 2 piles and name the piles.",
            "Point at the bean jar and say that is where an apple starts."
          ],
          "teaches": "That food has a source, which is the start of understanding the world outside the kitchen.",
          "easier": "Use 2 very clear ones, an apple and an egg.",
          "harder": "Ask where bread belongs, which is the harder and better question."
        },
        {
          "id": "p8c",
          "title": "Cutting and sticking",
          "subject": "Writing",
          "minutes": "10 to 15",
          "need": [
            "Safety scissors",
            "Old magazines or catalogs",
            "Glue or tape"
          ],
          "steps": [
            "Sit with them the whole time the scissors are out.",
            "Let them snip the edge of a page into fringe. No shapes needed.",
            "Cut out 3 pictures of food and stick them on paper.",
            "Put the scissors away together when you stop."
          ],
          "teaches": "The opening and closing hand motion that builds the same muscles writing needs.",
          "easier": "Snipping only, along a thick line you drew for them.",
          "harder": "Cut along a curved line you draw for them."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "manzana",
            "en": "apple",
            "say": "mahn SAH nah"
          },
          {
            "es": "flor",
            "en": "flower",
            "say": "flohr"
          },
          {
            "es": "árbol",
            "en": "tree",
            "say": "AR bohl"
          }
        ],
        "tip": "Name the tree on your own street in Spanish every time you walk past it."
      },
      "sign": {
        "word": "Water",
        "how": "Make a W with your index, middle and ring fingers, and tap it on your chin.",
        "use": "Useful the moment they want a drink and both your hands are full."
      }
    },
    {
      "n": 9,
      "focus": "Big feelings and settling a body",
      "lessons": [
        {
          "id": "p9a",
          "title": "Name it out loud",
          "subject": "Feelings",
          "minutes": "5 to 10",
          "need": [
            "Nothing"
          ],
          "steps": [
            "When you see a feeling today, name it and then stop there.",
            "You look really frustrated. Do not fix it or explain it.",
            "Say your own out loud too. I am tired and a bit cross.",
            "Do this 3 times a day all week."
          ],
          "teaches": "That a feeling with a name can be talked about instead of thrown.",
          "easier": "Name only the big obvious ones.",
          "harder": "Ask them to name yours by looking at your face."
        },
        {
          "id": "p9b",
          "title": "Breathing with a toy",
          "subject": "Feelings",
          "minutes": "5 to 10",
          "need": [
            "A small soft toy",
            "A rug"
          ],
          "steps": [
            "Lie them on their back with a soft toy on their tummy.",
            "Breathe in slowly through the nose and watch the toy rise.",
            "Out through the mouth and watch it fall. 5 times.",
            "Do it at the same point each day so it becomes the signal."
          ],
          "teaches": "That a body can be settled on purpose, which is a skill rather than a mood.",
          "easier": "3 breaths, with you counting them out loud.",
          "harder": "Use it once during a real wobble, not only when they are calm."
        },
        {
          "id": "p9c",
          "title": "Loud and quiet",
          "subject": "Music",
          "minutes": "10 to 15",
          "need": [
            "A pot",
            "A wooden spoon"
          ],
          "steps": [
            "Bang a pot loudly, then tap it as quietly as you can.",
            "Call out loud or quiet and let them match it.",
            "Do the same with fast and slow, then stop and go.",
            "Finish on quiet and slow, deliberately."
          ],
          "teaches": "Control of their own volume and speed, which is early music and a piece of self control.",
          "easier": "Loud and quiet only.",
          "harder": "Let them be the one calling out the words."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "feliz",
            "en": "happy",
            "say": "feh LEES"
          },
          {
            "es": "triste",
            "en": "sad",
            "say": "TREES tay"
          },
          {
            "es": "abrazo",
            "en": "hug",
            "say": "ah BRAH soh"
          }
        ],
        "tip": "Ask feliz o triste at bedtime, and answer for yourself first so it is not an interrogation."
      },
      "sign": {
        "word": "Sad",
        "how": "Open hands in front of your face, fingers spread, and draw them slowly downward.",
        "use": "A 3 year old can show you this long before they can explain any of it."
      }
    },
    {
      "n": 10,
      "focus": "Telling a story back",
      "lessons": [
        {
          "id": "p10a",
          "title": "Tell it back to me",
          "subject": "The world",
          "minutes": "10 to 15",
          "need": [
            "A picture book they already know"
          ],
          "steps": [
            "Read a short book they know well, without stopping.",
            "Close it and ask what happened first.",
            "Then what happened next, and then how it ended.",
            "Accept any version. Getting the order roughly right is the point."
          ],
          "teaches": "Holding a sequence in their head and putting it into their own words.",
          "easier": "Use the pictures as prompts and turn the pages together.",
          "harder": "Let them tell it to somebody who was not there."
        },
        {
          "id": "p10b",
          "title": "Hunt for one sound",
          "subject": "Letters",
          "minutes": "10 to 15",
          "need": [
            "A food packet",
            "A book"
          ],
          "steps": [
            "Go back to the first sound in their name.",
            "Look at a cereal box together and find that letter 3 times.",
            "Say the sound every time they point at it.",
            "Look for it on signs next time you are out."
          ],
          "teaches": "That the sound they know lives everywhere, not only on their own name card.",
          "easier": "You point and they say the sound.",
          "harder": "Add a second sound and hunt for both at once."
        },
        {
          "id": "p10c",
          "title": "Draw what happened",
          "subject": "Writing",
          "minutes": "10 to 15",
          "need": [
            "Paper",
            "Crayons"
          ],
          "steps": [
            "Fold a sheet of paper into 3 boxes.",
            "Ask them to draw the beginning, the middle and the end.",
            "Write their words underneath exactly as they say them.",
            "Read it back to them like a book."
          ],
          "teaches": "That their own words can be written down and read again, which is what writing is for.",
          "easier": "2 boxes only, the beginning and the end.",
          "harder": "Let them tell you which letter to write first."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "libro",
            "en": "book",
            "say": "LEE broh"
          },
          {
            "es": "gato",
            "en": "cat",
            "say": "GAH toh"
          },
          {
            "es": "perro",
            "en": "dog",
            "say": "PEH rroh"
          }
        ],
        "tip": "Point at the animal in the book and name it in Spanish before English."
      },
      "sign": {
        "word": "Cat",
        "how": "Pinch thumb and index finger at your cheek and pull outward, like drawing a whisker.",
        "use": "Easy to make, and animals are what a 3 year old wants to talk about anyway."
      }
    },
    {
      "n": 11,
      "focus": "Coins and what they are called",
      "lessons": [
        {
          "id": "p11a",
          "title": "Coins by name",
          "subject": "Numbers",
          "minutes": "5 to 10",
          "need": [
            "A penny, a nickel, a dime and a quarter, if they no longer mouth things"
          ],
          "steps": [
            "Lay out one of each and name it. Penny. Nickel. Dime. Quarter.",
            "Say a name and let them pick that coin up.",
            "Mix them and do it again. Names only, no values yet.",
            "Put them away out of reach when you are finished."
          ],
          "teaches": "The names of coins, which has to come long before any idea of what they are worth.",
          "easier": "2 coins only, a penny and a quarter.",
          "harder": "Ask which is the biggest and which is the smallest."
        },
        {
          "id": "p11b",
          "title": "Sorting the change jar",
          "subject": "Numbers",
          "minutes": "10 to 15",
          "need": [
            "A handful of coins",
            "A muffin tin",
            "A tray"
          ],
          "steps": [
            "Tip a handful of coins onto a tray and stay next to them.",
            "Sort them into the muffin tin, one kind of coin per hole.",
            "Count the pennies, touching each one as you say the number.",
            "Ask which hole has the most in it."
          ],
          "teaches": "Sorting and counting on the same set, using the most interesting objects in the house.",
          "easier": "Sort the pennies away from everything else and stop there.",
          "harder": "Count 2 kinds and say which there are more of."
        },
        {
          "id": "p11c",
          "title": "Rubbings and round edges",
          "subject": "Shapes",
          "minutes": "10 to 15",
          "need": [
            "Coins",
            "Paper",
            "A crayon with the paper peeled off"
          ],
          "steps": [
            "Put a coin under paper and rub the side of a crayon over it.",
            "Ask what shape appeared. All of them are circles.",
            "Do 4 coins and line the rubbings up by size.",
            "Name each coin again as you go."
          ],
          "teaches": "Comparing shape and size, with the coin names repeated without it feeling like a drill.",
          "easier": "You do one rubbing and they name the shape.",
          "harder": "Ask them to put the rubbings in order, smallest to biggest."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "moneda",
            "en": "coin",
            "say": "moh NEH dah"
          },
          {
            "es": "cuatro",
            "en": "four",
            "say": "KWAH troh"
          },
          {
            "es": "cinco",
            "en": "five",
            "say": "SEEN koh"
          }
        ],
        "tip": "Count the coins back into the jar in Spanish, 4 and 5 included."
      },
      "sign": {
        "word": "Please",
        "how": "Flat hand on your chest, circle it a few times.",
        "use": "Worth having before they start asking you for things in shops."
      }
    },
    {
      "n": 12,
      "focus": "Seasons, and looking back at 12 weeks",
      "lessons": [
        {
          "id": "p12a",
          "title": "What season is it",
          "subject": "The world",
          "minutes": "10 to 15",
          "need": [
            "A window",
            "Paper",
            "Crayons"
          ],
          "steps": [
            "Look outside, name the season, and say 2 things that show it.",
            "Name the other 3 seasons and what happens in each one.",
            "Draw the same tree 4 times, once for each season.",
            "Ask which season their birthday falls in."
          ],
          "teaches": "That the year has a shape that comes round again, which is how time starts to make sense.",
          "easier": "Do this season and the one before it, and leave the rest.",
          "harder": "Ask what they would wear in each season and why."
        },
        {
          "id": "p12b",
          "title": "Count and compare again",
          "subject": "Numbers",
          "minutes": "10 to 15",
          "need": [
            "Buttons, pasta or coins, if they no longer mouth things"
          ],
          "steps": [
            "Count out 10 objects together, touching each one.",
            "Split them into 2 uneven piles and ask which has more.",
            "Ask how many there are altogether, without counting again."
          ],
          "teaches": "That a number stays the same when you move the objects around, which is a real leap at this age.",
          "easier": "Use 6 objects and split them into 2 and 4.",
          "harder": "Ask them to make the 2 piles the same as each other."
        },
        {
          "id": "p12c",
          "title": "A color for today",
          "subject": "Feelings",
          "minutes": "5 to 10",
          "need": [
            "The feelings paper from week 1"
          ],
          "steps": [
            "Get out the feelings colors you made together in week 1.",
            "Ask what color they are today, and say yours first.",
            "Ask whether any of the colors need changing now.",
            "Put it back on the fridge for the next 12 weeks."
          ],
          "teaches": "A habit of checking in on a feeling, which lasts far longer than any single lesson.",
          "easier": "Let them point to a color instead of saying it.",
          "harder": "Ask what would move them to a different color."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "gracias",
            "en": "thank you",
            "say": "GRAH see ahs"
          },
          {
            "es": "por favor",
            "en": "please",
            "say": "por fah VOR"
          },
          {
            "es": "adiós",
            "en": "goodbye",
            "say": "ah dee OHS"
          }
        ],
        "tip": "Gracias is the one that sticks, because it gets used 5 times a day already."
      },
      "sign": {
        "word": "Thank you",
        "how": "Flat hand touching your chin near your lips, then move it forward and down toward the person.",
        "use": "Pairs with gracias this week, which makes both of them stick."
      }
    }
  ],
  "prek": [
    {
      "n": 1,
      "focus": "Their name, and listening",
      "lessons": [
        {
          "id": "k1a",
          "title": "Writing their whole name",
          "subject": "Writing",
          "minutes": "15 to 20",
          "need": [
            "Paper",
            "A pencil",
            "A marker"
          ],
          "steps": [
            "Write their first name with one capital letter and the rest small.",
            "They trace over your letters 3 times, saying each letter out loud.",
            "Then they write it underneath on their own, however it comes out.",
            "Add the last name on a second line once the first one is easy."
          ],
          "teaches": "Their name is the first word a school will ask them to write.",
          "easier": "Write the name in dots and let them join the dots.",
          "harder": "Ask for the name from memory with no copy in front of them."
        },
        {
          "id": "k1b",
          "title": "Find the first sound",
          "subject": "Reading",
          "minutes": "10 to 15",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Say their name slowly and stretch the first sound out. Mmmmax.",
            "Walk around and find 3 more things that start with that sound.",
            "Say the sound, not the letter name. Mmm, not em.",
            "Write that letter on paper and leave it where they can see it."
          ],
          "teaches": "Hearing the first sound in a word is the first step into reading.",
          "easier": "Give them 2 objects and ask which one starts with the sound.",
          "harder": "Ask for the last sound in the word as well as the first."
        },
        {
          "id": "k1c",
          "title": "Two step directions",
          "subject": "Feelings and school",
          "minutes": "10 to 15",
          "need": [
            "A basket",
            "Things from around the house"
          ],
          "steps": [
            "Give 2 instructions in one sentence. Get the spoon and put it in the basket.",
            "Say it once only, then wait without repeating yourself.",
            "If they do one part, say the missing part again calmly.",
            "Play it 5 times, then let them give you 2 steps."
          ],
          "teaches": "Following 2 steps without a reminder is most of what a teacher asks for all day.",
          "easier": "Use one step for a few days, then join 2 together.",
          "harder": "Try 3 steps, and have them say the list back before they start."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "hola",
            "en": "hello",
            "say": "OH lah"
          },
          {
            "es": "adiós",
            "en": "goodbye",
            "say": "ah DYOHS"
          },
          {
            "es": "sí",
            "en": "yes",
            "say": "see"
          }
        ],
        "tip": "Say hola every morning instead of hello and it is automatic inside a week."
      },
      "sign": {
        "word": "Book",
        "how": "Put your palms together, then open them like a book while the little fingers stay touching.",
        "use": "Sign it before every story, so the same word starts the same moment each day."
      }
    },
    {
      "n": 2,
      "focus": "Letter sounds, and asking for help",
      "lessons": [
        {
          "id": "k2a",
          "title": "5 sounds this week",
          "subject": "Reading",
          "minutes": "15 to 20",
          "need": [
            "Paper",
            "A marker"
          ],
          "steps": [
            "Write s, a, t, p and m big on separate pieces of paper.",
            "Say each sound rather than its name, and have them copy you.",
            "Spread them on the floor and call a sound for them to jump on.",
            "Keep the same 5 all week, then swap in 5 new ones."
          ],
          "teaches": "Knowing the sound each letter makes is the part that reading is built on.",
          "easier": "Work with 2 sounds until those 2 are certain, then add more.",
          "harder": "Ask them for a word that starts with each sound before they jump."
        },
        {
          "id": "k2b",
          "title": "Counting things, not numbers",
          "subject": "Math",
          "minutes": "15",
          "need": [
            "Buttons, pasta or coins"
          ],
          "steps": [
            "Count 20 objects into a line together, touching each one as you say it.",
            "Ask how many there were, without counting them again.",
            "Push the line into a pile and ask whether it is still 20.",
            "Count backward from 10 to finish."
          ],
          "teaches": "Counting out loud and knowing how many are 2 different skills, and the second is the real one.",
          "easier": "Stop at 10 for now and build up over the weeks.",
          "harder": "Start the count from 7, or from 14, rather than from 1."
        },
        {
          "id": "k2c",
          "title": "Asking a grown up",
          "subject": "Feelings and school",
          "minutes": "10",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Teach one sentence. Excuse me, I need help please.",
            "Practice it on you, then on another adult in the house.",
            "Act out 3 school moments, such as a stuck zipper or a spilled drink.",
            "Tell them a teacher is never too busy for that sentence."
          ],
          "teaches": "A child who can ask an adult for help is safe in a room full of children.",
          "easier": "Let them tap your arm and say help while the words are still coming.",
          "harder": "Practice with an adult they know less well, while you stand back."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "uno",
            "en": "one",
            "say": "OO noh"
          },
          {
            "es": "dos",
            "en": "two",
            "say": "dohs"
          },
          {
            "es": "tres",
            "en": "three",
            "say": "trays"
          }
        ],
        "tip": "Count the stairs in Spanish on the way up, every single time."
      },
      "sign": {
        "word": "Help",
        "how": "Make a fist with your thumb sticking up, rest it on your flat other palm, and lift both together.",
        "use": "Useful across a loud room, or when their mouth is full and the words will not come."
      }
    },
    {
      "n": 3,
      "focus": "Blending 3 sounds into a word",
      "lessons": [
        {
          "id": "k3a",
          "title": "Sound it out",
          "subject": "Reading",
          "minutes": "15",
          "need": [
            "Paper",
            "A marker",
            "Scissors"
          ],
          "steps": [
            "Write c, a and t on 3 scraps of paper and lay them apart.",
            "Say each sound as you push the scraps together. Cuh, a, t.",
            "Then say it faster until it turns into cat.",
            "Swap one scrap and read the new word. Mat, sat, pat."
          ],
          "teaches": "Pushing 3 sounds together into a word is the moment reading starts.",
          "easier": "Say the 3 sounds yourself and let them guess the word, with no letters out.",
          "harder": "Say a word and let them build it from the scraps themselves."
        },
        {
          "id": "k3b",
          "title": "How to hold a pencil",
          "subject": "Writing",
          "minutes": "10",
          "need": [
            "A pencil",
            "Paper",
            "A tissue"
          ],
          "steps": [
            "Tuck a small ball of tissue under their ring and little fingers.",
            "The other 3 fingers hold the pencil, and that is the grip.",
            "Draw lines, circles and zigzags for 5 minutes, no letters at all.",
            "Stop before the hand gets tired, which is sooner than you think."
          ],
          "teaches": "A hand that holds a pencil properly can write for years without hurting.",
          "easier": "Use a short broken crayon, which forces the right grip on its own.",
          "harder": "Write their name with the tissue still tucked into their hand."
        },
        {
          "id": "k3c",
          "title": "Will it float",
          "subject": "Science",
          "minutes": "15 to 20",
          "need": [
            "A bowl of water",
            "5 small objects",
            "Paper and a pencil"
          ],
          "steps": [
            "Line up 5 things from the kitchen next to a bowl of water.",
            "Ask what they think will happen to each one and write the guesses down.",
            "Test them one at a time and mark which guesses were right.",
            "Ask why the heavy one floated, and let a wrong answer stand."
          ],
          "teaches": "Guessing first and then testing is the whole shape of science, and it starts here.",
          "easier": "Use 2 objects, one that clearly sinks and one that clearly floats.",
          "harder": "Have them sort all 5 into 2 groups before any of it goes in the water."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "libro",
            "en": "book",
            "say": "LEE broh"
          },
          {
            "es": "papel",
            "en": "paper",
            "say": "pah PEL"
          },
          {
            "es": "lápiz",
            "en": "pencil",
            "say": "LAH pees"
          }
        ],
        "tip": "Name the thing already in their hand. El libro, el papel. Then carry on."
      },
      "sign": {
        "word": "More",
        "how": "Flatten your fingers against your thumb on both hands so each hand makes a closed beak, then tap the 2 fingertips together twice.",
        "use": "Ask for one more turn with it, so a request replaces the whining."
      }
    },
    {
      "n": 4,
      "focus": "Writing numbers, and taking turns",
      "lessons": [
        {
          "id": "k4a",
          "title": "Writing numbers 0 to 10",
          "subject": "Math",
          "minutes": "15",
          "need": [
            "Paper",
            "A pencil",
            "Small objects"
          ],
          "steps": [
            "Write 0 to 10 across the top of a page for them to copy underneath.",
            "Say the number out loud each time they write one.",
            "Backward numbers are normal at this age, so leave them alone.",
            "Count out that many objects next to each number they wrote."
          ],
          "teaches": "Writing a number and counting that many things are 2 halves of one idea.",
          "easier": "Trace the numbers in flour or foam before any pencil comes out.",
          "harder": "Ask them to write the number that comes after the one you say."
        },
        {
          "id": "k4b",
          "title": "5 more letter sounds",
          "subject": "Reading",
          "minutes": "15",
          "need": [
            "Paper",
            "A marker",
            "A food packet"
          ],
          "steps": [
            "Add 5 new sounds this week, such as d, g, o, c and k.",
            "Mix them with last week's 5 and call them out in any order.",
            "Find one of this week's letters on a packet in the kitchen.",
            "Keep going 5 at a time until all 26 have been covered."
          ],
          "teaches": "Covering every letter sound across the year is what makes an unknown word readable.",
          "easier": "Drop back to 3 new sounds a week if the pile is getting muddled.",
          "harder": "Ask for a word that ends with the sound rather than starts with it."
        },
        {
          "id": "k4c",
          "title": "Taking turns on purpose",
          "subject": "Feelings and school",
          "minutes": "15",
          "need": [
            "A ball",
            "A simple card or dice game"
          ],
          "steps": [
            "Play something with 2 clear turns, such as rolling a ball back and forth.",
            "Say whose turn it is out loud every single time.",
            "Let them lose once and sit with the feeling instead of fixing it.",
            "Name what they did. You waited while I went. That was hard."
          ],
          "teaches": "Waiting for a turn without it falling apart is the skill teachers mention most.",
          "easier": "Keep the turns very short so the wait is only a few seconds.",
          "harder": "Play with 3 people, so the wait is twice as long as it was."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "cuatro",
            "en": "four",
            "say": "KWAH troh"
          },
          {
            "es": "cinco",
            "en": "five",
            "say": "SEEN koh"
          },
          {
            "es": "seis",
            "en": "six",
            "say": "sayss"
          }
        ],
        "tip": "Carry the counting on at dinner, with real forks on the table."
      },
      "sign": {
        "word": "Wait",
        "how": "Both hands up, palms up, fingers wiggling.",
        "use": "Better than saying wait 5 more times, and it gives them something to watch."
      }
    },
    {
      "n": 5,
      "focus": "Shapes, scissors and the week",
      "lessons": [
        {
          "id": "k5a",
          "title": "Shape hunt",
          "subject": "Math",
          "minutes": "15",
          "need": [
            "Paper",
            "A pencil"
          ],
          "steps": [
            "Draw a circle, a square, a triangle and a rectangle across a page.",
            "Walk the house and find one real thing for each of them.",
            "Ask how they know it is a square, and count the sides together.",
            "They draw each shape underneath the one you drew."
          ],
          "teaches": "Naming shapes by sides and corners, not by how they look, is what school asks for.",
          "easier": "Start with circle and square only, and add the others later.",
          "harder": "Add a hexagon and an oval, and look for shapes hiding inside bigger shapes."
        },
        {
          "id": "k5b",
          "title": "Cutting on a line",
          "subject": "Writing",
          "minutes": "15",
          "need": [
            "Safety scissors",
            "Paper",
            "A marker"
          ],
          "steps": [
            "Draw one thick straight line down a strip of paper.",
            "Thumb up, scissors closed between snips, paper held in the other hand.",
            "Cut along the line, turning the paper rather than the scissors.",
            "Move to wavy lines, then a circle, over the next few weeks."
          ],
          "teaches": "Scissors build the same hand muscles that writing leans on later.",
          "easier": "Snip the edge of a strip with single cuts and no line to follow.",
          "harder": "Cut out a shape they drew themselves."
        },
        {
          "id": "k5c",
          "title": "Days of the week",
          "subject": "The world",
          "minutes": "10 to 15",
          "need": [
            "Paper",
            "A marker"
          ],
          "steps": [
            "Write the 7 days in a row somewhere they can see all week.",
            "Every morning point at today, yesterday and tomorrow.",
            "Sing the days to a tune you both already know.",
            "Mark one day they care about and count the days until it."
          ],
          "teaches": "Knowing what day it is and what comes next is how a school week makes sense.",
          "easier": "Use today and tomorrow only, for a week or 2.",
          "harder": "Add the month, and count how many days this month has."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "círculo",
            "en": "circle",
            "say": "SEER koo loh"
          },
          {
            "es": "cuadrado",
            "en": "square",
            "say": "kwah DRAH doh"
          },
          {
            "es": "triángulo",
            "en": "triangle",
            "say": "tree AHN goo loh"
          }
        ],
        "tip": "Say the shape word when you spot one in the house, then carry on with your day."
      },
      "sign": {
        "word": "Stop",
        "how": "Bring the edge of one flat hand down sharply onto your other flat palm.",
        "use": "Pair it with a reason, since stop on its own is only a command."
      }
    },
    {
      "n": 6,
      "focus": "Sight words and lunch",
      "lessons": [
        {
          "id": "k6a",
          "title": "Words you cannot sound out",
          "subject": "Reading",
          "minutes": "15",
          "need": [
            "Paper",
            "A marker",
            "A picture book"
          ],
          "steps": [
            "Write the, and, is, a and said on separate scraps of paper.",
            "Read them together, then find each one inside a real book.",
            "Hunt one word on a page and count how many times it turns up.",
            "Add 5 more once these 5 are known on sight."
          ],
          "teaches": "Some common words have to be known by sight, because sounding them out does not work.",
          "easier": "Use the and a only, and hunt just those 2.",
          "harder": "Read a short sentence built only from words they already know."
        },
        {
          "id": "k6b",
          "title": "Adding with real things",
          "subject": "Math",
          "minutes": "15",
          "need": [
            "Coins, pasta or buttons",
            "Paper"
          ],
          "steps": [
            "Put 3 coins in one hand and 2 in the other, then push them together.",
            "Ask how many now, and let them count every coin.",
            "Do it 5 times with different amounts, always with objects.",
            "Only after all that, write 3 and 2 makes 5 on paper."
          ],
          "teaches": "Adding has to happen in their hands before it means anything on paper.",
          "easier": "Keep both amounts under 3, so the total can be seen at a glance.",
          "harder": "Ask for the answer before they count, then check it together."
        },
        {
          "id": "k6c",
          "title": "Opening their own lunch",
          "subject": "Feelings and school",
          "minutes": "15",
          "need": [
            "A lunchbox or a bag",
            "Their usual lunch food"
          ],
          "steps": [
            "Pack a real lunch and let them open every single item alone.",
            "Watch the hard ones, such as a yogurt lid or a tight zipper.",
            "Loosen lids at home for a few weeks rather than opening them.",
            "Eat it at the table inside 20 minutes, the way lunch really goes."
          ],
          "teaches": "Nobody can open 25 lunches, so a child who cannot open theirs does not eat.",
          "easier": "Practice one container a day instead of a whole lunch at once.",
          "harder": "They pack the lunch, open it, and put every lid back on after."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "comida",
            "en": "food",
            "say": "koh MEE dah"
          },
          {
            "es": "agua",
            "en": "water",
            "say": "AH gwah"
          },
          {
            "es": "manzana",
            "en": "apple",
            "say": "mahn SAH nah"
          }
        ],
        "tip": "Ask for the word at the table before you pass the thing over."
      },
      "sign": {
        "word": "Eat, or food",
        "how": "Fingers and thumb together in a beak, tap your fingertips to your mouth a couple of times.",
        "use": "Handy at a table where their hands are full and their mouth is busy."
      }
    },
    {
      "n": 7,
      "focus": "Patterns and beat",
      "lessons": [
        {
          "id": "k7a",
          "title": "Patterns with the silverware",
          "subject": "Math",
          "minutes": "15",
          "need": [
            "Spoons and forks",
            "Buttons"
          ],
          "steps": [
            "Lay out spoon, fork, spoon, fork, and then stop.",
            "Ask what comes next, and ask how they knew.",
            "They build a pattern and you guess the next piece.",
            "Try a harder one, such as 2 spoons and then one fork."
          ],
          "teaches": "Spotting what repeats is the thinking underneath both math and reading.",
          "easier": "Use 2 colors of the same object, so only the color changes.",
          "harder": "Leave a gap in the middle of the pattern for them to fill."
        },
        {
          "id": "k7b",
          "title": "Clap what you hear",
          "subject": "Music",
          "minutes": "10",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Clap their name in syllables. Het, tie, lee.",
            "Clap a short pattern and have them clap it back to you.",
            "Clap the beat of a song you both know while you sing it.",
            "Swap over, and let them set the pattern for you."
          ],
          "teaches": "Hearing the parts of a word is early reading wearing a costume.",
          "easier": "Clap 2 beats only, and keep them even.",
          "harder": "Clap a pattern with a pause in the middle of it."
        },
        {
          "id": "k7c",
          "title": "Writing 3 sound words",
          "subject": "Writing",
          "minutes": "15",
          "need": [
            "Paper",
            "A pencil"
          ],
          "steps": [
            "Say a word slowly, such as pin, holding up a finger for each sound.",
            "They write one letter for each sound they can hear.",
            "Do 4 words, all with 3 sounds. Hat, dog, sun, bed.",
            "Leave their spelling alone, even where it is wrong."
          ],
          "teaches": "Writing down the sounds they hear is how spelling actually begins.",
          "easier": "Give them the first letter and let them finish the word.",
          "harder": "Ask for a short sentence using one of the words they wrote."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "rojo",
            "en": "red",
            "say": "ROH hoh"
          },
          {
            "es": "azul",
            "en": "blue",
            "say": "ah SOOL"
          },
          {
            "es": "amarillo",
            "en": "yellow",
            "say": "ah mah REE yoh"
          }
        ],
        "tip": "Name the color of what they are putting on while they get dressed."
      },
      "sign": {
        "word": "Play",
        "how": "Both hands in a Y shape, thumb and pinky out, and twist them back and forth at the wrist.",
        "use": "Loose and waggly, and easy enough that they will give it back to you quickly."
      }
    },
    {
      "n": 8,
      "focus": "Taking away, and feeling lost",
      "lessons": [
        {
          "id": "k8a",
          "title": "Taking away with objects",
          "subject": "Math",
          "minutes": "15",
          "need": [
            "Buttons or pasta",
            "A cup"
          ],
          "steps": [
            "Count out 5 buttons, then hide 2 of them under a cup.",
            "Ask how many are left, then lift the cup and check.",
            "Repeat with different starting amounts, up to 10.",
            "Write 5 take away 2 leaves 3 on paper at the very end."
          ],
          "teaches": "Taking away is easier to see than to hear, so the objects have to come first.",
          "easier": "Start with 3 buttons and hide only one of them.",
          "harder": "Ask how many you hid, when all they can see is what is left."
        },
        {
          "id": "k8b",
          "title": "Every sound we know",
          "subject": "Reading",
          "minutes": "15",
          "need": [
            "Paper",
            "A marker"
          ],
          "steps": [
            "Write every letter you have covered so far on separate scraps.",
            "Go through the pile and make 2 piles, known and not yet.",
            "Work only from the not yet pile for the rest of the week.",
            "Check again on Friday and move whatever has moved."
          ],
          "teaches": "Knowing which sounds are still missing is more use than starting the alphabet again.",
          "easier": "Sort 10 letters at a time, so the pile is not overwhelming.",
          "harder": "Add the sounds 2 letters make together, such as sh and ch."
        },
        {
          "id": "k8c",
          "title": "If you feel lost",
          "subject": "Feelings and school",
          "minutes": "15",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Teach the rule. Stay where you are and find a grown up who works here.",
            "Practice saying their own full name, and the teacher's name.",
            "Act it out in a store, with you 10 steps away and watching.",
            "Tell them you would never be angry about it, which is the part they worry about."
          ],
          "teaches": "A plan said out loud in a calm kitchen is the one they reach for in a loud hallway.",
          "easier": "Practice the full name only for now, which is the hard part anyway.",
          "harder": "Add the playground version, and who counts as a safe grown up there."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "más",
            "en": "more",
            "say": "mahs"
          },
          {
            "es": "menos",
            "en": "less",
            "say": "MEH nohs"
          },
          {
            "es": "igual",
            "en": "same",
            "say": "ee GWAHL"
          }
        ],
        "tip": "Use más when they ask for more of something, which will be several times a day."
      },
      "sign": {
        "word": "Scared, or afraid",
        "how": "Both hands in loose fists in front of your body, then open them suddenly toward your chest, like a flinch.",
        "use": "Sign it for them while they are feeling it, so the feeling gets a name."
      }
    },
    {
      "n": 9,
      "focus": "Comparing amounts, writing words",
      "lessons": [
        {
          "id": "k9a",
          "title": "More, fewer, the same",
          "subject": "Math",
          "minutes": "15",
          "need": [
            "2 cups",
            "Buttons or pasta"
          ],
          "steps": [
            "Put a handful in each cup, then tip them out into 2 lines.",
            "Line them up side by side, so the longer line is obvious.",
            "Ask which has more, which has fewer, and how they know.",
            "Make the 2 lines equal by moving pieces across."
          ],
          "teaches": "Comparing 2 amounts by matching them up comes before comparing the numbers.",
          "easier": "Use amounts that look very different, such as 2 and 9.",
          "harder": "Ask how many more one line has than the other one."
        },
        {
          "id": "k9b",
          "title": "Writing real words",
          "subject": "Writing",
          "minutes": "15",
          "need": [
            "Paper",
            "A pencil",
            "Tape"
          ],
          "steps": [
            "Ask them to write 3 words they can already read.",
            "Then write a label for something real, such as the dog bowl.",
            "Tape the label onto the thing and leave it there.",
            "Correct one thing only, and only if they ask you to."
          ],
          "teaches": "Writing for a real reason sticks better than writing for practice.",
          "easier": "They say the word, you write it, and they copy it underneath.",
          "harder": "Write a short list, such as 3 things to buy at the store."
        },
        {
          "id": "k9c",
          "title": "Which one melts first",
          "subject": "Science",
          "minutes": "15 to 20",
          "need": [
            "Ice cubes",
            "2 plates",
            "Paper and a pencil"
          ],
          "steps": [
            "Put one ice cube somewhere warm and one somewhere cold.",
            "Ask which will melt first, and write the guess down before you start.",
            "Check every 5 minutes and say out loud what has changed.",
            "Ask why they think that happened, and talk about it rather than correcting it."
          ],
          "teaches": "A guess written down turns a bowl of water into a question with an answer.",
          "easier": "Use one ice cube and just watch it change.",
          "harder": "Add a third cube wrapped in a towel, and guess where that one lands."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "grande",
            "en": "big",
            "say": "GRAHN deh"
          },
          {
            "es": "pequeño",
            "en": "small",
            "say": "peh KEH nyoh"
          },
          {
            "es": "muchos",
            "en": "many",
            "say": "MOO chohs"
          }
        ],
        "tip": "Say grande and pequeño while you sort the laundry into piles."
      },
      "sign": {
        "word": "Water",
        "how": "Make a W with your index, middle and ring fingers, and tap it on your chin.",
        "use": "Worth having for the moment they need a drink and the room is noisy."
      }
    },
    {
      "n": 10,
      "focus": "Measuring, and hard feelings",
      "lessons": [
        {
          "id": "k10a",
          "title": "Measuring with your shoe",
          "subject": "Math",
          "minutes": "15",
          "need": [
            "A shoe",
            "String",
            "Paper and a pencil"
          ],
          "steps": [
            "Measure the table in shoes, heel to toe, counting as you go.",
            "Write the number down, then measure it again with your shoe.",
            "Ask why the 2 numbers came out different.",
            "Measure 3 more things and put them in order, shortest to longest."
          ],
          "teaches": "Measuring means laying units end to end with no gaps, and that is the part usually skipped.",
          "easier": "Hold 2 objects side by side and just say which is longer.",
          "harder": "Use a tape measure and read the number of inches off it."
        },
        {
          "id": "k10b",
          "title": "The calendar this month",
          "subject": "The world",
          "minutes": "10 to 15",
          "need": [
            "Paper",
            "A pencil"
          ],
          "steps": [
            "Draw a grid for this month and write the numbers into it.",
            "Cross off today every morning, together.",
            "Mark 2 things they care about and count the days until each one.",
            "Ask what day it is and what day comes after it."
          ],
          "teaches": "A calendar turns time into something a 5 year old can see and count.",
          "easier": "Use one week at a time rather than a whole month.",
          "harder": "Ask how many days until something that is 3 weeks away."
        },
        {
          "id": "k10c",
          "title": "When the feeling is big",
          "subject": "Feelings and school",
          "minutes": "15",
          "need": [
            "Nothing"
          ],
          "steps": [
            "Name 4 feelings together and pick a color for each one.",
            "Teach 2 things to do. Breathe out slowly, or tell a grown up.",
            "Practice the breathing while they are calm, not in the middle of a storm.",
            "Ask what color they are today, and tell them yours first."
          ],
          "teaches": "A feeling with a name is a feeling that can be talked about instead of thrown.",
          "easier": "Use happy and sad only, and name them out loud as you see them.",
          "harder": "Work out what they could say to a teacher when the feeling starts."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "lunes",
            "en": "Monday",
            "say": "LOO nays"
          },
          {
            "es": "martes",
            "en": "Tuesday",
            "say": "MAR tays"
          },
          {
            "es": "hoy",
            "en": "today",
            "say": "oy"
          }
        ],
        "tip": "Say the day in Spanish when you point at the calendar each morning."
      },
      "sign": {
        "word": "Sad",
        "how": "Open hands in front of your face, fingers spread, and draw them slowly downward.",
        "use": "Use it while their face is already doing it, which is how it gets learned."
      }
    },
    {
      "n": 11,
      "focus": "Numbers to 20, whole sentences",
      "lessons": [
        {
          "id": "k11a",
          "title": "Counting and writing to 20",
          "subject": "Math",
          "minutes": "15 to 20",
          "need": [
            "Paper",
            "A pencil",
            "Small objects"
          ],
          "steps": [
            "Count to 20 out loud, touching one object for each number.",
            "Write 11 to 20 in a row, saying each one as they write it.",
            "Point at a written number and have them count out that many.",
            "Cover one number in the row and ask which one is missing."
          ],
          "teaches": "The teens are the hardest part of counting, so they need more practice than 1 to 10.",
          "easier": "Work to 15 for now and add the rest in a few weeks.",
          "harder": "Count to 20 starting from 13, or count backward from 20."
        },
        {
          "id": "k11b",
          "title": "Reading a whole sentence",
          "subject": "Reading",
          "minutes": "15",
          "need": [
            "Paper",
            "A marker"
          ],
          "steps": [
            "Write a short sentence about them. Sam can see the dog.",
            "Point under each word as they read it, one word at a time.",
            "Read it a second time, smoothly. The second read is where it sticks.",
            "Write a new sentence each day using the same sight words."
          ],
          "teaches": "A sentence pulls sounding out and sight words together into actual reading.",
          "easier": "Use 3 word sentences, and read every other word for them.",
          "harder": "Ask a question about the sentence once they have read it."
        },
        {
          "id": "k11c",
          "title": "Sitting and listening",
          "subject": "Feelings and school",
          "minutes": "15",
          "need": [
            "A longer picture book"
          ],
          "steps": [
            "Read a longer book with them sitting near you, not on your lap.",
            "Stop twice and ask what they think happens next.",
            "Ask them to wait until you finish the page before they talk.",
            "Build up toward 15 minutes across the weeks."
          ],
          "teaches": "Listening in a group means waiting to speak, which is a skill and not just manners.",
          "easier": "Start at 5 minutes and stop while they still want more.",
          "harder": "Ask them to retell the story in order once you have finished."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "ocho",
            "en": "eight",
            "say": "OH choh"
          },
          {
            "es": "nueve",
            "en": "nine",
            "say": "NWEH veh"
          },
          {
            "es": "diez",
            "en": "ten",
            "say": "dyess"
          }
        ],
        "tip": "Count to 10 in Spanish every single day until it is automatic."
      },
      "sign": {
        "word": "Please",
        "how": "Flat hand on your chest, circle it a few times.",
        "use": "Pair it with the spoken word, every time, which is the whole method."
      }
    },
    {
      "n": 12,
      "focus": "Putting it together",
      "lessons": [
        {
          "id": "k12a",
          "title": "Their whole name, neatly",
          "subject": "Writing",
          "minutes": "15",
          "need": [
            "Lined paper",
            "A pencil"
          ],
          "steps": [
            "Write their first and last name between 2 lines on the page.",
            "Check the capital letter sits at the start of each name only.",
            "Write it on 3 real things, such as a book cover or a bag.",
            "5 minutes a day beats one long session on a Sunday."
          ],
          "teaches": "Writing a full name is the first thing most schools ask for on day one.",
          "easier": "First name only, and leave the last name for later in the year.",
          "harder": "Write the name small enough to fit on a real label."
        },
        {
          "id": "k12b",
          "title": "A practice school morning",
          "subject": "Feelings and school",
          "minutes": "20",
          "need": [
            "A lunchbox",
            "Their shoes, coat and bag"
          ],
          "steps": [
            "Run the morning in order. Shoes, coat, bag, goodbye at the door.",
            "Eat lunch out of the box at the real time, opening it alone.",
            "Practice the bathroom alone, including the hand washing after.",
            "Say the goodbye the same way each time, short and certain."
          ],
          "teaches": "A morning they have already lived once is a morning that is not frightening.",
          "easier": "Do one part of the morning a day instead of the whole thing.",
          "harder": "Add getting dressed alone, and a 2 step instruction in the middle of it."
        },
        {
          "id": "k12c",
          "title": "They read to you",
          "subject": "Reading",
          "minutes": "15",
          "need": [
            "An easy reading book",
            "A book well above their level"
          ],
          "steps": [
            "They read to you for 10 minutes, sounding out whatever they can.",
            "Wait 5 seconds before helping with a stuck word.",
            "Then you read something far above their level for 5 minutes.",
            "Stop while they still want to carry on."
          ],
          "teaches": "Reading in both directions every day does more than anything else on this list.",
          "easier": "They read the pictures and tell you the story instead.",
          "harder": "Ask for the same page a second time, read smoothly."
        }
      ],
      "spanish": {
        "words": [
          {
            "es": "escuela",
            "en": "school",
            "say": "ehs KWEH lah"
          },
          {
            "es": "maestra",
            "en": "teacher",
            "say": "mah EHS trah"
          },
          {
            "es": "amigo",
            "en": "friend",
            "say": "ah MEE goh"
          }
        ],
        "tip": "Teach amigo before the first day, so they have one word for the playground."
      },
      "sign": {
        "word": "Thank you",
        "how": "Flat hand touching your chin near your lips, then move it forward and down toward the person.",
        "use": "Worth having on day one, for the adults who hand them things all day."
      }
    }
  ]
};

export const EARLY_LOOP_NOTE =
  'After week 12 it starts again at week 1. A child a year older does the same lesson in a completely '
  + 'different way, which is the point rather than a gap.';

export const EARLY_DONE_NOTE =
  'Ticking one is just for you. Nothing is scored, and skipping a week costs nothing.';

export function earlyBandFor(months) {
  const m = Number(months);
  if (!isFinite(m)) return null;
  return EARLY_BANDS.filter((b) => m >= b.minMonths && m < b.maxMonths)[0] || null;
}

export function earlyShows(months) {
  return !!earlyBandFor(months);
}

export function earlyBandById(id) {
  return EARLY_BANDS.filter((b) => b.id === id)[0] || null;
}

/* Which week they are on, counted in whole weeks from the day they
   first opened it, and looping at 12. */
export function earlyWeekFor(startDay, todayDay) {
  if (!startDay) return 1;
  const a = new Date(startDay + 'T00:00:00');
  const b = new Date(todayDay + 'T00:00:00');
  const days = Math.floor((b - a) / 86400000);
  if (!isFinite(days) || days < 0) return 1;
  return (Math.floor(days / 7) % 12) + 1;
}

export function earlyWeek(bandId, n) {
  const list = EARLY_WEEKS[bandId] || [];
  return list.filter((w) => w.n === n)[0] || list[0] || null;
}

export const EARLY_SOURCES = [
  { label: 'What children learn before kindergarten', org: 'NAEYC', url: 'https://www.naeyc.org/our-work/families/kindergarten-readiness' },
  { label: 'Learning through play at home', org: 'Zero to Three', url: 'https://www.zerotothree.org/resource/playing-your-way-through-the-day/' },
  { label: 'Dual language development', org: 'Zero to Three', url: 'https://www.zerotothree.org/resource/dual-language-development-double-the-benefit/' },
];
