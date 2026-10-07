---
layout: default
title: About Craig Cockburn
meta_title: "About Craig Cockburn | Agile, Delivery & Critical Thinking"
eyebrow: Siliconglen
intro: "Extensive experience connecting agile coaching, programme and project delivery, critical thinking and AI."
description: "About Craig Cockburn and Siliconglen: critical thinking, delivery and Agile focused on clearer decisions and useful outcomes."
permalink: /about/
---

<header class="page-header">
  <div class="wrapper">
    <p class="eyebrow">{{ page.eyebrow }}</p>
    <h1>{{ page.title }}</h1>
    <p class="pronunciation">(pronounced "Coburn") <button class="pronunciation__button" type="button" aria-label="Play pronunciation of Craig Cockburn's name" aria-controls="name-pronunciation"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="pronunciation__speaker" d="M11 5 6.5 9H3v6h3.5l4.5 4V5Z"/><path d="M15 9.5a4 4 0 0 1 0 5"/><path d="M17.5 7a7.5 7.5 0 0 1 0 10"/></svg></button></p>
    <audio id="name-pronunciation" preload="none">
      <source src="/assets/audio/craig-cockburn-name.m4a" type="audio/mp4">
      <source src="/assets/audio/craig-cockburn-name.mp3" type="audio/mpeg">
    </audio>
    <p class="lede">{{ page.intro }}</p>
  </div>
</header>

<article class="wrapper prose" markdown="1">

## Understand the real problem before trying to solve it {#understand-the-real-problem}

I help leaders think more clearly, decide with confidence, and deliver complex change.

My experience has spanned many sectors, including banking, insurance, manufacturing, retail, telecoms, startups and the public sector, and covers software and the early internet, complex programme delivery, organisational systems, critical thinking, AI and [public speaking]({{ '/speaking/' | relative_url }}). The context has changed over that time, but the thread hasn't: understand the real problem, test the assumptions, and turn a sound decision into a useful result.

Siliconglen brings that work together as one blended practice. Critical Thinking sharpens the question and the decision. Delivery translates it into a working outcome. Agile supports adaptive delivery and improvement once the work meets reality. None of the three is a separate business, or a complete answer on its own.

## Career {#career}

I started as a Software Engineer at Digital Equipment Company (1987–1992), working on DECnet development and technically certifying Digital's largest customers, and [received a personal recognition award from founder Ken Olsen]({{ '/citations/#draft-patent-application-pagelink-1990' | relative_url }}).

I went on to lead the e-commerce rescue and platform delivery for VisitScotland (2000–2006), before moving into programme and project management. At Directgov I managed significant web projects, including HM Treasury's Government Spending Challenge website for the Office of No. 10 Downing Street, and I later led Southwark Council's award-winning digital transformation. I've delivered measured outcomes for clients including [VisitScotland]({{ '/case-studies/#visitscotland-e-commerce-rescue' | relative_url }}), the [Government Spending Challenge]({{ '/case-studies/#government-spending-challenge' | relative_url }}) and [Southwark Council]({{ '/case-studies/#southwark-council-programme' | relative_url }}).

From 2007 I moved into public sector programme and project management, including launching the pilot that became mygov.scot, before specialising in enterprise agile coaching from 2018 at organisations including Lloyds Banking Group, Royal Bank of Scotland, Morgan Stanley, BT and Admiral Insurance, where I set up the Agile Centre of Excellence and [trained a large cohort of staff]({{ '/case-studies/#enterprise-agile-coach-admiral-group-plc' | relative_url }}).

More recently, I've led Agile rollout at Kuberno, worked as an Enterprise Agile Coach at Allied Irish Bank in Dublin, and embedded agile ways of working across Jaguar Land Rover's manufacturing plants in Birmingham and Liverpool. I've also delivered SAFe training internationally and spoken and trained on critical thinking in Romania, India and Malta. My latest delivery work includes leading the Siliconglen AI-assisted rewrite and process improvement, delivery and quality initiatives at a tech startup in the energy sector.

## Boards and directorships {#boards-and-directorships}

I have 16 years' non-executive board experience, including Dot Scot Registry (2012–2023), the Scottish Government-backed not-for-profit regulator for the .scot domain, and Comann an Luchd-Ionnsachaidh, the Gaelic learners' educational charity (1992–1998).

## Credentials and recognition {#credentials-and-recognition}

I'm a Chartered Engineer and Chartered IT Professional Fellow (British Computer Society), a Chartered Manager and Fellow of the Chartered Management Institute, and I hold [professional credentials]({{ '/credentials/#professional-standing-and-higher-education' | relative_url }}) spanning Red Team Thinking®, SAFe and Agile coaching. I share practical ideas through [talks and teaching workshops]({{ '/speaking/#talks-and-teaching-workshops' | relative_url }}), while my [community recognition and publishing credits]({{ '/citations/#bcs-neurodiverse-it-specialist-group-2022-2024' | relative_url }}) reflect wider contributions to the profession.

## Start with the problem {#start-with-the-problem}

If you have a decision, programme or organisational problem worth thinking through properly, describe it and the outcome you need.

<p class="section__cta">Get in touch now: <a class="btn btn--primary" href="{{ '/contact/' | relative_url }}">Contact me</a></p>

</article>

<script>
  (function () {
    var button = document.querySelector('.pronunciation__button');
    var audio = document.getElementById('name-pronunciation');

    if (!button || !audio) return;

    button.addEventListener('click', function () {
      audio.currentTime = 0;
      audio.play();
    });
  }());
</script>
