const version = (title, version) => console.log(
    `%c ${title} %c v${version} `,
    'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #41b883; background: #35495e; font-weight: bold;',
    'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #35495e; background: #41b883; font-weight: bold;',
);
  
version('Raccon','0.0.0');