---
title: June 2021 Update (Teaxr v0.5.622)
authors: [sahil]
tags: [releases]
---

### :rocket: Major Features

* Updated browser whitelisting for different OS and browsers
* 2 events are available as clickable actions: is_clicked (resettable) and has_been_clicked (not-resettable)
* Actionbar notch now shows a contrasting color to the background
* Full support for Macbook touchpad in V5 viewer

### :arrow_double_up: Minor Improvements 

* Ability to delete and update org logo from the settings page
* UI fixes on V5 screens
* Duplicate To dropdown in portal is now searchable. Search can be done on org slug or org name
* Removed option to Import and select for File manager plugins (sketchfab/flickr/GMetri panos/Drew panos)
* V5 deployment links can be accessed from publish section on the editor
* Reset View button can be enabled/disabled from editor
* UX changed on deployment slug renames when there are clashing deployments with same slug. User sees a toaster and the changes are reverted

### :bug: Bug Fixes

A whole lot of bug fixes in the V5 viewer:

* Hover events will now works correctly for 0 secs durations
* All Viewer Screens (Leadgen, Language, VR instructions etc) work seamlessly on mobile devices
* Actionbar variations on all devices (mobile/tablet/desktop) work as expected
* Fixed crashing Popups with 3d Models and AR elements on iOS devices
* Capture text no longer allows itself to be submitted with an empty string
* Media Upload UI fixed
* Fixed timer seek_to and on_end events
* Fixed scrolling issue on viewer screens for V5 viewer
* Fixed Custom list login page for V5 Viewer
* Enforce landscape screen shows a better graphic
* Fixed orbit controls clicks on mobile devices
* Mouse dragging works during scene transitions
* GMetri watermark is shown if whitelabel is disabled

Also,
* Fixed team invite flow on portal
* Automatically adding new scenes to menu if auto add new scene to menu property is checked on settings screen inside editor
* Non-live deployments are blocked from V5 viewer
* Fixed contact Drew page link
