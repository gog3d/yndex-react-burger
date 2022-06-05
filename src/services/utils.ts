import { baseURL }  from '../utils/config';

export function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name: string, value: string | number | boolean, props: object = {}) {
  props = {
    path: '/', ...props
  };
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp= props.expires = d;
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

export function deleteCookie(name: string) {
//  console.log(name)
  setCookie(name, null, { expires: -1 });
}

interface CustomBody<T extends any> extends Body {
  json(): Promise<T>;
}

interface CustomResponse<T> extends CustomBody<T> {
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  //readonly trailer: Promise<Headers>;
  readonly type: ResponseType;
  readonly url: string;
}

export function checkResponse(res: CustomResponse<any>) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка ${res.status}`);
  }
};

export const fetchRequest = {
  post: async (path: string = '', body: object = {}): Promise<any> => {
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
  get: async (path: string = '', headers: object = {}): Promise<any> => {
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
  patch: async (path: string = '', body: object = {}, headers: object = {}) => {
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
