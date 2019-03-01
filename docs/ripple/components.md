# Components

Ripple provides components library hosted at https://ripple.sdp.vic.gov.au

## Forms

Ripple supports Drupal [Webform](https://www.drupal.org/project/webform). 

All backend Drupal [webforms](https://www.drupal.org/project/webform) in Ripple
frontend are rendered dynamically using [Vue Form Generator (VFG)](https://icebob.gitbooks.io/vueformgenerator/).

!!! note

    Only limited set functionality is currently supported. See "Support status"
    column.

### Configuration

| Webform field   | Support status  | VFG form field  | 
|---              |---              |---              |      
| `#title`        | IMPLEMENTED     | label           | 
| `#required`     | IMPLEMENTED     | required        | 
| `#options`      | IMPLEMENTED     | values          | 
| `#empty_option` | IMPLEMENTED     | placeholder     |  
| `#description`  | IMPLEMENTED     | hint            | 
| `#placeholder`  | IMPLEMENTED     | placeholder     | 

### Elements
| Webform element name  | Webform Category  | Webform element ID    | Support status  | VFG form element |
|---                    |---                |---                    |---              |---               |
| Checkbox              | Basic             | `checkbox`            | PLANNED         | `checkbox` | 
| Hidden                | Basic             | `hidden`              | IMPLEMENTED     | `input: hidden` | 
| Textarea              | Basic             | `textarea`            | IMPLEMENTED     | `textArea` | 
| Text field            | Basic             | `textfield`           | IMPLEMENTED     | `input: text` | 
| Autocomplete          | Advanced          |                       | NOT PLANNED     ||
| CAPTCHA               | Advanced          |                       | NOT PLANNED     ||
| CodeMirror            | Advanced          |                       | NOT PLANNED     ||
| Color                 | Advanced          |                       | NOT PLANNED     ||                                           
| Email                 | Advanced          | `email`               | IMPLEMENTED     | `input: email` | 
| Email confirm         | Advanced          |                       | NOT PLANNED     || 
| Email multiple        | Advanced          |                       | NOT PLANNED     || 
| Mapping               | Advanced          | Mapping               | NOT PLANNED     || 
| Number                | Advanced          | `number`              | IMPLEMENTED     | `input: number` | 
| Range                 | Advanced          |                       | NOT PLANNED     || 
| Rating                | Advanced          |                       | NOT PLANNED     || 
| Search                | Advanced          |                       | NOT PLANNED     || 
| Signature             | Advanced          |                       | NOT PLANNED     || 
| Telephone             | Advanced          | `tel`                 |                 | `input: tel` | 
| Terms of service      | Advanced          |                       | NOT PLANNED     || 
| Text format           | Advanced          |                       | NOT PLANNED     || 
| Toggle                | Advanced          |                       | NOT PLANNED     || 
| URL                   | Advanced          |                       | NOT PLANNED     || 
| Value                 | Advanced          |                       | NOT PLANNED     ||                
| Basic address         | Composite         |                       | NOT PLANNED     || 
| Advanced address      | Composite         |                       | NOT PLANNED     || 
| Contact               | Composite         |                       | NOT PLANNED     || 
| Custom composite      | Composite         |                       | NOT PLANNED     || 
| Link                  | Composite         |                       | NOT PLANNED     || 
| Location              | Composite         |                       | NOT PLANNED     || 
| Name                  | Composite         |                       | NOT PLANNED     || 
| Telephone advanced?   | Composite         |                       | NOT PLANNED     || 
| Advanced HTML/Text    | Markup            | `processed_text`      | PLANNED         | `label` | 
| Basic HTML            | Markup            | `webform_markup`      | PLANNED         | `label` | 
| Horizontal rule       | Markup            | `horizontal_rule`     | PLANNED         | `custom` | 
| Message               | Markup            |                       | NOT PLANNED     ||
| Label                 | Markup            | `label`               | PLANNED         | `label` | 
| Audio file            | File upload       | `file`                | NOT PLANNED     || 
| Document file         | File upload       | `file`                | NOT PLANNED     || 
| File                  | File upload       | `file`                | NOT PLANNED     || 
| Image file            | File upload       | `file`                | NOT PLANNED     || 
| Video file            | File upload       | `file`                | NOT PLANNED     || 
| Buttons               | Options           |                       | NOT PLANNED     ||  
| Checkboxes            | Options           |                       | NOT PLANNED     || 
| Checkboxes other      | Options           |                       | NOT PLANNED     || 
| Likert                | Options           |                       | NOT PLANNED     || 
| Radios                | Options           | `radios`              | IMPLEMENTED     | `radios` | 
| Radios other          | Options           |                       | NOT PLANNED     || 
| Select                | Options           | `select`              | LIMITED         | `vueMultiSelect` |
| Multi Select          | Options           |                       | NOT PLANNED     || 
| Select other          | Options           | `select_other`        | NOT PLANNED     ||
| Table select          | Options           |                       | NOT PLANNED     ||
| Tableselect sort      | Options           |                       | NOT PLANNED     ||
| Table sort            | Options           |                       | NOT PLANNED     ||
| Computed token        | Computed          |                       | NOT PLANNED     ||
| Computed Twig         | Computed          |                       | NOT PLANNED     ||
| Container             | Container         |                       | NOT PLANNED     ||
| Details               | Container         |                       | NOT PLANNED     ||
| Fieldset              | Container         |                       | NOT PLANNED     ||
| Flexbox layout        | Container         |                       | NOT PLANNED     ||
| Item                  | Container         |                       | NOT PLANNED     ||
| Section               | Container         |                       | NOT PLANNED     ||
| Date                  | Date/time         | `date`                | PLANNED ||
| Date/time             | Date/time         |                       | NOT PLANNED     || 
| Date list             | Date/time         |                       | NOT PLANNED     || 
| Time                  | Date/time         |                       | NOT PLANNED     || 
| Submit button(s)      | Buttons           | `webform_actions`     | LIMITED  || 
| Entity autocomplete   | Entity reference  |                       | NOT PLANNED     || 
| Entity checkboxes     | Entity reference  |                       | NOT PLANNED     || 
| Entity radios         | Entity reference  |                       | NOT PLANNED     || 
| Entity select         | Entity reference  |                       | NOT PLANNED     || 
| Term checkboxes       | Entity reference  |                       | NOT PLANNED     || 
| Term select           | Entity reference  | `webform_term_select` | PLANNED         ||
