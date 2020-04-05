import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import '../bootstrap-reboot.min.css';
import '../bootstrap.css';
import '../bootstrap-grid.css';
import '../main.css';


addDecorator(withInfo({ inline: true }));
addDecorator(withKnobs);
