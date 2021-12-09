const nameInput = require("../../HeroName.js");
const {characterStats:{hero}} = require("../../Stats/characterStats-API.js");

const dialogues = {
    opening: [
        `+ Winged Light => Hero! Qeldrin, Eater Of All has taken nest in the great bastion of        +`,
        `+                 Heldana VII Crown, Castle Ironbark. Fight your way to Ironbark and        +`,
        `+                 slay the beast!                                                           +`,
        `+                 By what name shall I address thee?                                ->      +\n`,
        `+-------------------------------------------------------------------------------------------+`,
        `+ Hero => My name is ${nameInput}                                                           +\n`,
        `+ The light brightens to a dazzling glare, then vanishes.                                   +`,
        `+ A small owl like any but somehow none other comes to rest on a nearby branch.             +\n`,
        `+ Qaspiel => I wilt beest thy companion then. I cannot assist thee on thy journey yet       +`,
        `+            I shall keep thee privy to all things proper and true. Qaspiel is mine         +`,
        `+            name, PUKUKUKUKUKUKUKUKUKUKUKUU!                                       ->      +\n`
    ],
    classPick_sword: [
        `+ You grab your sword!                                                                      +`,
        `+ Qaspiel => How nice another warrior (>_>), can I drop the mystic accent noweth?   =>      +\n`,
        `+ You gawk at the insolent bird with annoyance and slight contempt.                         +`,
        `+  description says "bE mYsTiCaLlllLLlL qASpiEllLL" as if "Be Not Afraid" isn\'t            +`,
        `+  soooooo overdone. Blame Gabriel. Don't even get me started on that guy. 200% a tool.     +`
    ],
    classPick_wand: [
        `+ You grab your wand!                                                                       +`,
        `+-------------------------------------------------------------------------------------------+`,
        `+ You gawk at the insolent bird with annoyance and slight contempt.                         +\n`,
        `+ => Awesome, it was annoying to talk like that but the job (~REDACTED~) damn job           +`,
        `+    description says "bE mYsTiCaLlllLLlL qASpiEllLL" as if "Be Not Afraid" isn\'t          +`,
        `+    soooooo overdone. Blame Gabriel. Don't even get me started on that guy. 200% total     +`,
        `+    toolbag. Remember you didn't hear that from me!                               =>       +\n`
    ],
    classPick_rifle: [
        `+ You grab your rifle!                                                              \n      +`,
        `+ Qaspiel => A mage?? In these parts? I thought only the university could train mages!      +`,
        `+            Watch where you point those Fireballs!                                 =>      +\n`,
        `+ You gawk at the insolent bird with annoyance and slight contempt.                         +\n`,
        `+ Qaspiel => Awesome, it was annoying to talk like that but the job (~REDACTED~)damn        +`,
        `+            job description says "bE mYsTiCaLlllLLlL qASpiEllLL" as if "Be Not Afraid"     +`,
        `+            isn't soooooo overdone. Blame Gabriel. Don't even get me started on that       +`,
        `+            guy. 200% total toolbag. Remember you didn't hear that from me!       =>       +\n`
    ],
    stageOne: {
        opening: [
            `+---------------------------------------------------------------------------------------+`,
            `+ ${nameInput} => Shut up bird brain, lets kick some lizard booty!                      +`,
            `+ ${nameInput} darts down the dirt path of the front garden and through the village to  +`,
            `+ the village center where a gaping pit wide enough to host four wagon abreast at its   +`,
            `+ diameter. ${nameInput} the hero stops right at its edge and Qaspien perches on your   +`,
            `+ shoulder.                                                                             +`
        ],
        help_isTrue: [
            `+---------------------------------------------------------------------------------------+`,
            `+ Qaspiel => If you let me help you down into the tunnel you could gain some wisdown &  +`,
            `+            wisdom is healthy for the body!                                            +`,
            `+---------------------------------------------------------------------------------------+`
        ],
        help_isFalse: [
            `+---------------------------------------------------------------------------------------+`,
            `+ Qaspiel => (<_<) (>_>) (;_;) k then...                                                +`,
            `+ You fall down the hole and take some damage                                           +`,
            `+ Your health is now ${hero.health}!                                                    +`
        ]
    },
    stageTwo: {
        opening: [
            `+---------------------------------------------------------------------------------------+`,
            `+ You find yourself in a dark tunnel. A gaint glint pierces the darkness to your left   +`
        ],
        investigate_left: [
            `+---------------------------------------------------------------------------------------+`,
            `+ You went left!                                                                        +`,
            `+ Upon closer inspection, you find that the glint is reflecting off a metal surface as  +`,
            `+ Qaspiel's light dimly illuminates the tunnel.                                         +\n`,
            `+ ${nameInput} => Aha! A mining cart! Its in great condition!                           +\n`,
            `+ Qaspiel => I don't trust this rust bucket not one bit but hey I can fly so suit       +`,
            `+            yourself! PUKUKUKUKUKU +\n`
        ],
        investigate_right: [
            `+---------------------------------------------------------------------------------------+`,
            `+ You went right!                                                                       +`,
            `+ As you approach the dripping, the air thickens with malice and the smell of iron      +`,
            `+ permeates the darkness and dread.                                                     +`,
            `+ ?????????  => Feed? Feed! CATCH AND FEED!!!!!                                         +\n`,
            `+ Qaspiel => Watch it kid! Close your eyeballs!                                         +\n`,
            `+ The angel to takes to wing and air, their small but mighty wings growing brighter     +`,
            `+ with each wingbeat.                                                                   +`,
            `+ The sconces of the tunnel wall blaze to life and cast an ugly orange aura on a bloody +`,
            `+ mouthed Troll and the few remains of a villager that hung from the ceiling. How could +`,
            `+ one have gotten this far to the surface? No matter, let's RUMBLE!!                    +`
        ]
    }
};

module.exports = {
    dialogues
};