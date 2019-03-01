# Accessibility requirements

## WCAG AA 2.0 Requirement
All Victoria Government website must be at least WCAG AA 2.0 compliant.

## Victorian Government Accessibility Toolkit
The accessibility toolkit is available to assist all agencies in ensuring their
websites are compliant with the Victoria Government standards.

## Extra Requirements
The aim for the SDP project is to go beyond the requirements and focus on
ensuring the sites are truly user friendly for users with accessibility needs.
The DTA has published a blog article about this topic,
https://www.dta.gov.au/blog/Accessibility-going-beyond-the-guidelines/. There is
also a good presentation here on some of the things to think about when building
for accessibility. Some steps that should be required either per ticket or at
least for the UAT process are:

- Colour Contrast. Check colour contrast in a tool such as
  http://www.color-blindness.com/coblis-color-blindness-simulator/
- Accessibility checker. Ensure the automated tests in Monsido have run over the
new functionality.
- Keyboard only. Push the mouse away and try to operate the screen. You should
be able to navigate with the keyboard only.
- Screen-reader only. Turn on a screen-reader such as NVDA or VoiceOver and turn
off the screen (or look away). All essential content should be read out and you
should be able to navigate the screen.

## Design Considerations
- High colour contrast is good for colour blind users; it also helps users view a website on a mobile when in bright sunlight.
- Text over images should be avoided where possible. Some things to consider:
    - Can the text colour change?
    - Can the Image change, thereby changing the colour contrast?
    - Can a solid background colour be applied to the text to ensure visibility
    
## Content Considerations
There are minimum requirements for WCAG compliance, however, if the users need
is considered, the actual requirement should be more defined.

- `alt` and `title` text fields help people to understand visual elements without
being able to see them. Read through this explanation from
[WebAIM](https://webaim.org/), https://webaim.org/techniques/alttext/#context. 
- `alt` and `title` text are required, however users should be able to override
 this when required. For example, purely decorative images that offer no useful
content to the user should not have alt and title text and should be ignored by
screen readers. https://www.w3.org/WAI/tutorials/images/decorative/.
- Try to avoid just copying the title text into the alt text field. 
- Videos should always have captions; look at the YouTube auto CC when using
YouTube.
- When creating links, try to avoid content like 'Click here' or 'here'. A
screen reader will read the link as something like "Leaving list | visited link
| here". Better link text describes what the user will get to, `visit the
Governors website`.

## Technical Implementation
- For images, `alt` and `title` text fields should be made mandatory. There must 
   be the ability to override this when adding images that are decorative.
- `alt` and `title` attributes must always be present, even when they are blank.
- Ensure headings are hierarchical; try to always ensure that headings on a page
will be read in order.
- Use `aria-live` on any dynamic sections. See
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions.
