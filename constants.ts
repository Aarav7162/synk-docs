import { Category } from './types';

export const SYNTAX_DATA: Category[] = [
  {
    id: 'setup-loop',
    title: '1. Setup and Loop',
    items: [
      { id: 'start-setup', synk: 'start setup', arduino: 'void setup() {', note: 'Runs once when the board powers up.' },
      { id: 'end-setup', synk: 'end setup', arduino: '}' },
      { id: 'start-loop', synk: 'start loop', arduino: 'void loop() {', note: 'Runs repeatedly after setup finishes.' },
      { id: 'end-loop', synk: 'end loop', arduino: '}' },
      { id: 'end-generic', synk: 'end', arduino: '}' },
    ],
  },
  {
    id: 'builtin-led',
    title: '2. Builtin LED',
    items: [
      { id: 'led-on', synk: 'turn on builtinled', arduino: 'digitalWrite(2, HIGH);', note: 'Pin 2 is usually the internal LED on ESP boards.' },
      { id: 'led-off', synk: 'turn off builtinled', arduino: 'digitalWrite(2, LOW);' },
    ],
  },
  {
    id: 'lcd-display',
    title: '3. LCD Display',
    items: [
      { id: 'lcd-use', synk: 'use lcd', arduino: '#include <LiquidCrystal_I2C.h>', note: 'Required library inclusion.' },
      { id: 'lcd-create', synk: 'make a screen called <name> at address <addr>', arduino: 'LiquidCrystal_I2C <name>(<addr>, 16, 2);', note: 'Common address is 0x27.' },
      { id: 'lcd-begin', synk: 'begin <name> with <c> columns and <r> rows', arduino: '<name>.init(); <name>.backlight();', note: 'Initializes screen and turns on light.' },
      { id: 'lcd-print-var', synk: 'lcd print "<text>" + <var>', arduino: 'lcd.print("<text>"); lcd.print(<var>);' },
      { id: 'lcd-print-line', synk: 'lcd print "<text>" on line <n>', arduino: 'lcd.setCursor(0, <n-1>); lcd.print("<text>");', note: 'Line numbers start at 1 in Synk.' },
      { id: 'lcd-print-var-line', synk: 'lcd print <var> on line <n>', arduino: 'lcd.setCursor(0, <n-1>); lcd.print(<var>);' },
      { id: 'lcd-print-simple', synk: 'lcd print "<text>"', arduino: 'lcd.print("<text>");' },
      { id: 'lcd-print-var-only', synk: 'lcd print <var>', arduino: 'lcd.print(<var>);' },
      { id: 'lcd-cursor', synk: 'lcd set cursor to <x>,<y>', arduino: 'lcd.setCursor(<x>, <y>);' },
      { id: 'lcd-home', synk: 'lcd home', arduino: 'lcd.home();' },
      { id: 'lcd-clear', synk: 'lcd clear', arduino: 'lcd.clear();' },
      { id: 'lcd-off', synk: 'turn off lcd backlight', arduino: 'lcd.noBacklight();' },
      { id: 'lcd-on', synk: 'turn on lcd backlight', arduino: 'lcd.backlight();' },
    ],
  },
  {
    id: 'buttons-input',
    title: '4. Buttons and Input',
    items: [
      { id: 'while-pressed', synk: 'while button on pin <n> is pressed', arduino: 'while(digitalRead(<n>) == HIGH) {' },
      { id: 'while-not-pressed', synk: 'while button on pin <n> is not pressed', arduino: 'while(digitalRead(<n>) == LOW) {' },
      { id: 'read-button', synk: 'read button on pin <n>', arduino: 'digitalRead(<n>);' },
      { id: 'if-pressed', synk: 'if pin <n> is pressed/high', arduino: 'if (digitalRead(<n>) == HIGH) {' },
      { id: 'if-low', synk: 'if pin <n> is low', arduino: 'if (digitalRead(<n>) == LOW) {' },
    ],
  },
  {
    id: 'variables-math',
    title: '5. Variables and Math',
    items: [
      { id: 'make-number', synk: 'make number called <name>', arduino: 'int <name>;' },
      { id: 'make-word', synk: 'make word called <name>', arduino: 'String <name>;' },
      { id: 'timer-reset', synk: 'set timer to current millis', arduino: 'unsigned long timer = millis();', note: 'Stores current time for non-blocking delays.' },
      { id: 'set-var-millis', synk: 'set <var> to current millis', arduino: '<var> = millis();' },
      { id: 'set-var-calc', synk: 'set <var> to <val1> <op> <val2>', arduino: '<var> = <val1> <op> <val2>;' },
      { id: 'set-var-val', synk: 'set <var> to <value>', arduino: '<var> = <value>;' },
      { id: 'change-var', synk: 'change <var> by <n>', arduino: '<var> += <n>;', note: 'Increments the variable.' },
      { id: 'timer-check', synk: 'if millis minus timer is greater than <n>', arduino: 'if (millis() - timer > <n>) {', note: 'Checks if time interval has passed.' },
      { id: 'math-abs', synk: 'absolute of <n>', arduino: 'abs(<n>);' },
      { id: 'math-sqrt', synk: 'square root of <n>', arduino: 'sqrt(<n>);' },
      { id: 'math-map', synk: 'map <v> from <a1>-<a2> to <b1>-<b2>', arduino: 'map(<v>, <a1>, <a2>, <b1>, <b2>);', note: 'Re-maps a number from one range to another.' },
    ],
  },
  {
    id: 'arrays-lists',
    title: '6. Arrays and Lists',
    items: [
      { id: 'list-create', synk: 'create list <name> with size <n>', arduino: 'int <name>[<n>];' },
      { id: 'list-set', synk: 'set <name>[<i>] to <val>', arduino: '<name>[<i>] = <val>;' },
      { id: 'list-read', synk: 'read <name>[<i>]', arduino: '<name>[<i>]' },
    ],
  },
  {
    id: 'control-flow',
    title: '7. Control Flow',
    items: [
      { id: 'if-eq', synk: 'if <v1> is equal to <v2>', arduino: 'if (<v1> == <v2>) {' },
      { id: 'if-gt', synk: 'if <v1> is greater than <v2>', arduino: 'if (<v1> > <v2>) {' },
      { id: 'if-lt', synk: 'if <v1> is less than <v2>', arduino: 'if (<v1> < <v2>) {' },
      { id: 'else', synk: 'else', arduino: '} else {' },
      { id: 'repeat-step', synk: 'repeat <start> to <end> step <n>', arduino: 'for (int i = <start>; i <= <end>; i += <n>) {' },
      { id: 'repeat-times', synk: 'repeat <n> times', arduino: 'for (int i = 0; i < <n>; i++) {' },
      { id: 'forever', synk: 'forever', arduino: 'while (true) {', note: 'Infinite loop, careful!' },
    ],
  },
  {
    id: 'pins-io',
    title: '8. Pins and I/O',
    items: [
      { id: 'pin-mode', synk: 'set pin <n> as input/output', arduino: 'pinMode(<n>, INPUT/OUTPUT);' },
      { id: 'pin-on', synk: 'turn on pin <n>', arduino: 'digitalWrite(<n>, HIGH);' },
      { id: 'pin-off', synk: 'turn off pin <n>', arduino: 'digitalWrite(<n>, LOW);' },
      { id: 'pin-toggle', synk: 'toggle pin <n>', arduino: 'digitalWrite(<n>, !digitalRead(<n>));', note: 'Reads current state and flips it.' },
      { id: 'analog-write', synk: 'analog write pin <n> to <val>', arduino: 'analogWrite(<n>, <val>);', note: 'PWM output (0-255).' },
      { id: 'analog-read', synk: 'read analog pin A<n>', arduino: 'analogRead(A<n>);', note: 'Reads value (0-1023).' },
      { id: 'digital-read', synk: 'read digital pin <n>', arduino: 'digitalRead(<n>);' },
    ],
  },
  {
    id: 'logic-operators',
    title: '9. Logic Operators',
    items: [
      { id: 'logic-and', synk: '<condition1> and <condition2>', arduino: '(<condition1> && <condition2>)' },
      { id: 'logic-or', synk: '<condition1> or <condition2>', arduino: '(<condition1> || <condition2>)' },
      { id: 'logic-not', synk: 'not <condition>', arduino: '!<condition>' },
    ],
  },
  {
    id: 'tone',
    title: '10. Tone',
    items: [
      { id: 'play-tone', synk: 'play tone on pin <p> at <h> hz for <m> ms', arduino: 'tone(<p>, <h>, <m>);' },
      { id: 'stop-tone', synk: 'stop tone on pin <p>', arduino: 'noTone(<p>);' },
    ],
  },
  {
    id: 'timing',
    title: '11. Timing',
    items: [
      { id: 'wait-ms', synk: 'wait <n> milliseconds', arduino: 'delay(<n>);', note: 'Pauses the entire program.' },
      { id: 'wait-sec', synk: 'wait <n> seconds', arduino: 'delay(<n> * 1000);' },
      { id: 'wait-random', synk: 'wait random milliseconds between <min> and <max>', arduino: 'delay(random(<min>, <max>));' },
      { id: 'time-check', synk: 'if time passed is more than <n>ms', arduino: 'if (millis() > <n>) {' },
    ],
  },
  {
    id: 'functions',
    title: '12. Functions',
    items: [
      { id: 'func-def', synk: 'define function <name>', arduino: 'void <name>() {' },
      { id: 'func-call', synk: 'call <name>', arduino: '<name>();' },
    ],
  },
  {
    id: 'servo',
    title: '13. Servo',
    items: [
      { id: 'servo-use', synk: 'use servo', arduino: '#include <Servo.h>' },
      { id: 'servo-create', synk: 'create servo called <name>', arduino: 'Servo <name>;' },
      { id: 'servo-attach', synk: 'attach <name> to pin <n>', arduino: '<name>.attach(<n>);' },
      { id: 'servo-move', synk: 'move <name> to <pos>', arduino: '<name>.write(<pos>);' },
    ],
  },
  {
    id: 'ultrasonic',
    title: '14. Ultrasonic Sensor',
    items: [
      { id: 'ultra-use', synk: 'use ultrasonic', arduino: '#include <Ultrasonic.h>' },
      { id: 'ultra-create', synk: 'make an ultrasonic called <name> with trig <t> echo <e>', arduino: 'Ultrasonic <name>(<t>, <e>);' },
      { id: 'ultra-read', synk: '<var> = distance from <name>', arduino: '<var> = <name>.read();' },
      { id: 'ultra-read-into', synk: 'read <name> into <var>', arduino: '<var> = <name>.read();' },
    ],
  },
  {
    id: 'hydropump',
    title: '15. Hydropump / Gardener',
    items: [
      { id: 'pump-pin', synk: 'set pin <n> as pump output', arduino: 'pinMode(<n>, OUTPUT);' },
      { id: 'pump-on', synk: 'turn on hydropump at pin <n>', arduino: 'digitalWrite(<n>, HIGH);' },
      { id: 'pump-off', synk: 'turn off hydropump at pin <n>', arduino: 'digitalWrite(<n>, LOW);' },
    ],
  },
  {
    id: 'motors',
    title: '16. Motors',
    items: [
      { id: 'motor-create', synk: 'make motor called <name> on pins <p1>,<p2>', arduino: 'Motor <name>(<p1>, <p2>);' },
      { id: 'motor-fwd', synk: 'turn <name> forward at <speed>', arduino: '<name>.forward(<speed>);' },
      { id: 'motor-bwd', synk: 'turn <name> backward at <speed>', arduino: '<name>.backward(<speed>);' },
      { id: 'motor-stop', synk: 'stop <name>', arduino: '<name>.stop();' },
    ],
  },
  {
    id: 'random',
    title: '17. Random',
    items: [
      { id: 'random-set', synk: 'set <var> to random number between <min> and <max>', arduino: 'int <var> = random(<min>, <max>);' },
    ],
  },
  {
    id: 'eeprom',
    title: '19. EEPROM',
    items: [
      { id: 'eeprom-use', synk: 'use eeprom', arduino: '#include <EEPROM.h>' },
      { id: 'eeprom-save', synk: 'save <var> into eeprom[<addr>]', arduino: 'EEPROM.write(<addr>, <var>);' },
      { id: 'eeprom-read', synk: 'read eeprom[<addr>] into <var>', arduino: '<var> = EEPROM.read(<addr>);' },
    ],
  },
  {
    id: 'ir-remote',
    title: '20. IR Remote',
    items: [
      { id: 'ir-use', synk: 'use ir', arduino: '#include <IRremote.h>' },
      { id: 'ir-read', synk: 'read remote into <var>', arduino: '<var> = irrecv.decode();' },
      { id: 'ir-resume', synk: 'resume ir', arduino: 'irrecv.resume();' },
    ],
  },
  {
    id: 'serial',
    title: '21. Serial',
    items: [
      { id: 'serial-start', synk: 'start serial at <baud>', arduino: 'Serial.begin(<baud>);', note: 'Standard baud rate is 9600 or 115200.' },
      { id: 'serial-say', synk: 'say <part1> + <part2>', arduino: 'Serial.print(<part1>); Serial.println(<part2>);' },
    ],
  },
  {
    id: 'interrupts',
    title: '22. Interrupts',
    items: [
      { id: 'int-stop', synk: 'stop interrupts', arduino: 'noInterrupts();' },
      { id: 'int-start', synk: 'start interrupts', arduino: 'interrupts();' },
    ],
  },
];