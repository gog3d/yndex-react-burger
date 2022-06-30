import { baseURL }  from '../utils/config';

export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, props = {}) {
  props = {
    path: '/', ...props
  };
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function deleteCookie(name) {
//  console.log(name)
  setCookie(name, null, { expires: -1 });
}

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка ${res.status}`);
  }
};

export const fetchRequest = {
  post: async (path = '', body = null) => {
    const header = {token: 'token'};
    const headers = {'Content-Type': 'application/json', ...header};
    return new Promise((resolve, reject) => {
      fetch(baseURL + path, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers:  {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body),
      }).then(res => resolve(res)).catch((err) => reject(err));
    })
  },
  get: async (path = '', headers = {}) => {
    return new Promise((resolve, reject) => {
      fetch(baseURL + path, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers:  {
          'Content-Type': 'application/json', 
          ...headers
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      }).then(res => resolve(res)).catch((err) => reject(err));
    })
  },
  patch: async (path = '', body=null, headers = {}) => {
    return new Promise((resolve, reject) => {
      fetch(baseURL + path, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers:  {
          'Content-Type': 'application/json', 
          ...headers
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body),
      }).then(res => resolve(res)).catch((err) => reject(err));
    })
  },

};
