# General Notes on Web Design and Development

At the end of the 2023-24 school year, I watched the following videos
recommended by my NVCC evaluator for end-of-year professional development:

* [Intro to Front-End Web Development](https://www.youtube.com/watch?v=7C4dv8vuwEk)
* [Getting Started in Web Design](https://www.youtube.com/watch?v=05r34Q9oM-8)
* [Intro to UI Design](https://www.youtube.com/watch?v=GbJLsSi7ehY)

All three videos contain lectures by Dan Rodney from
[noble desktop](https://www.nobledesktop.com/).  What follows are my summaries
of and reactions to each of these.


## Intro to Front-End Web Development

This video provides a nice high level overview of the content of our
ITD 110 and ITD 210 web page design courses. It begins with an introduction
to the *web development trifecta*,
[HTML](https://en.wikipedia.org/wiki/HTML),
[CSS](https://en.wikipedia.org/wiki/CSS),
and [JavaScript](https://en.wikipedia.org/wiki/JavaScript), briefly discussing
what each language is used for and providing short examples of each one.

I liked Dan's comments about both the increasing abstraction and increasing
complexity of each language, and how this relates to the fact that each
succeeding language acts upon the preceeding one(s). I tell students that
because each successive language is more "fun" than the proceeding one, we
have a nice motivation which helps us deal with the increasing complexity.

Dan next discusses
[front-end web development](https://en.wikipedia.org/wiki/Front-end_web_development) vs.
[back-end web development](https://en.wikipedia.org/wiki/Client%E2%80%93server_model#Server-side).
He talks about how JavaScript can now be used on both, and mentions how this
became possible when Google pulled their
[V8 JavaScript engine](https://en.wikipedia.org/wiki/V8_(JavaScript_engine))
out of their [Chrome](https://en.wikipedia.org/wiki/Google_Chrome) browser and
made it a separate application.

I appreciated Dan's description of the skills involved in both front-end and
back-end, and his willingness to state his opinion that people learning
web development should not "overreach" by claiming to be full-stack developers
when they really are not.

Next Dan discusses front-end JavaScript frameworks, including
[Bootstrap](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)),
[React](https://en.wikipedia.org/wiki/React_(JavaScript_library)),

I learned in this video about the 
[MERN](https://en.wikipedia.org/wiki/MEAN_(solution_stack)) solution stack.
Since our course is laying the foundation for using frameworks like this, it
is good to know what lies ahead for students who pursue their study further.

I also didn't know that
[React Native](https://en.wikipedia.org/wiki/React_Native) existed as a
framework for writting web apps that can be compiled into native apps for
Android and iOS. Coming from the Python community, I have been aware of
[BeeWare](https://beeware.org/), which has the same goal, for a long time.

I was totally unaware of [GSAP](https://gsap.com/) (a.k.a "GreenSock"),
a JavaScript animation library that some of my students would *love*. I'll
ask one of them to check it out soon.

Dan then talks about [jQuery](https://en.wikipedia.org/wiki/JQuery), confirming
what I already knew, that while it played an important role in the development
of the web, modern JavaScript is making using it less and less necessary.

Next comes a brief discussion of
[WordPress](https://en.wikipedia.org/wiki/WordPress). I was already well aware
of this.

The lecture next discusses of code editors and revision control, specifically 
[Visual Studio Code](https://en.wikipedia.org/wiki/Visual_Studio_Code),
[Git](https://en.wikipedia.org/wiki/Git), and
[GitHub](https://en.wikipedia.org/wiki/GitHub). I did not know that
VSCode was an
[Electron](https://en.wikipedia.org/wiki/Electron_(software_framework)) based
application that could be launched on the GitHub website by simply pressing the
<code>.</code> key. Cool!

Dan then talks about the use of HTML and CSS for email. I learned several
things I did not know about how their use in email differs from current web
browser use due to the different ways they are rendered.

The lecture ends asking viewers to consider whether front-end or back-end
development might be right for them given what they learned in the video.

All-in-all I found it a useful lecture in which I learned several new things
and which I would happily recommend to my students to get an overview of
what we are learning in ITD 110 and 210.


## Getting Started in Web Design

This video is a lab designed to get learners started actually creating their
first web page.  It's basically a creating a "Hello World!" website
walk-through.

I did not watch the full video.  It was clear to me only a few minutes into it
that I would *definitely not* want to use it with my classes for one clear and
simple reason: I have a workflow, with a specific set of skills and practices,
that I want students to learn, beginning with developing comfort managing files
and directories (and using git) from the Unix CLI.  This video would have them
learn a totally different workflow which would cause no end of confusion,
struggle, and hardship within my classroom. So there is not much here of use
to me.


## Intro to UI Design

Right out of the gate I could tell this third video would be much more useful
to me than the previous one. It promises in the first slide to address the
following topics:

* What goes into designing &amp; building apps/websites?
* How UI and UX design relate to each other
* What apps are used in UI design?
* Techniques &amp; Tools: Wireframing, prototyping, visual design, typography,
  UI kits, &amp; more

### What goes into designing &amp; building apps/websites?

Dan starts by drawing our attention two the two complementary roles involved in
creating a website: **designers** and **developers**.  The thing I like best
about teaching web development is that it empowers learners to become
*publishers* of globally available information about anything that is important
to them.  While the ability to design and publish is what attracted me, I'm
definitely a latecomer to the design party, and that has long been a weakness of
mine as a web teacher. I can teach the developer skills, but not the design
skills.

Dan lists some design apps, [Figma](https://en.wikipedia.org/wiki/Figma),
[Adobe XD](https://en.wikipedia.org/wiki/Adobe_XD),
and [Sketch](https://en.wikipedia.org/wiki/Sketch_(software)), none of which I
was familiar with. All of them are propriatary software, but reading about
them inspired to seek their best open source alternative, which I determined
to be [Penpot](https://penpot.app/).

