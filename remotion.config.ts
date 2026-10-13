import {Config} from '@remotion/cli/config';

// Reuse the system Chromium supplied by the cloud image; avoids downloading a second browser.
Config.setBrowserExecutable('/usr/bin/chromium');
Config.setConcurrency(2);
