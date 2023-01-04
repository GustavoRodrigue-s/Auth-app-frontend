interface SetProps {
  id: string;
  value: any;
  maxAge: number;
}

class Cookies {
  set({ id, value, maxAge }: SetProps) {
    document.cookie = `${id} = ${value}; max-age=${maxAge}`;
  }

  destroy({ id }: Pick<SetProps, 'id'>) {
    document.cookie = `${id} = ; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }

  get({ id }: Pick<SetProps, 'id'>) {
    const cookies = document.cookie.split('; ').join('=').split('=');
    return cookies.includes(id) ? cookies[cookies.indexOf(id) + 1] : undefined;
  }
}

export default new Cookies();
