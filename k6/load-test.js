import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<500']
  }
};

export default function () {
  const res = http.get('http://localhost:8080/');
  check(res, {
    'status is 200': (r) => r.status === 200
  });
  // fetch assets
  http.get('http://localhost:8080/assets/js/app.js');
  http.get('http://localhost:8080/assets/css/styles.css');
  sleep(1);
}
