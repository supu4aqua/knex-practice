BEGIN;

INSERT INTO blogful_articles
    (title, date_published, content)
VALUES
  ('Northeast', '2016-01-16 12:00:00',       'Despotato'),
  ('Midwest ',  '2016-05-01 15:00:00',       'Shape of Pooh'),
  ('South',     '2017-02-22 12:00:00',       'UpTown Monk'),
  ('West',      '2017-04-04 08:00:00',       'Despotato'),
  ('Midwest ',  '2017-04-23 15:00:00',       'Despotato'),
  ('Northeast', '2017-08-11 13:00:00',       'Cats that teach SQL'),
  ('Midwest ',  '2017-12-09 17:00:00',       'Despotato'),
  ('South',     '2018-01-24 19:00:00',       'Cats that teach SQL'),
  ('West',      '2018-01-29 11:00:00',       'Man''s not torrid'),
  ('Northeast', '2018-02-13 05:00:00',       'UpTown Monk'),
  ('Midwest ',  '2018-03-13 09:00:00',       'Shape of Pooh'),
  ('South',     '2018-03-31 13:00:00',       'UpTown Monk'),
  ('Northeast', '2019-04-03 07:00:00',       'Despotato'),
  ('West',      '2019-05-05 21:00:00',       'UpTown Monk'),
  ('West',      now() - '29 days'::INTERVAL, 'Man''s not torrid'),
  ('Northeast', now() - '29 days'::INTERVAL, 'Despotato'),
  ('Midwest ',  now() - '29 days'::INTERVAL, 'Cats that teach SQL'),
  ('Northeast', now() - '29 days'::INTERVAL, 'UpTown Monk'),
  ('Midwest ',  now() - '29 days'::INTERVAL, 'Despotato'),
  ('West',      now() - '29 days'::INTERVAL, 'Shape of Pooh'),
  ('Midwest ',  now() - '28 days'::INTERVAL, 'Cats that teach SQL'),
  ('Northeast', now() - '28 days'::INTERVAL, 'UpTown Monk'),
  ('Midwest ',  now() - '28 days'::INTERVAL, 'Man''s not torrid'),
  ('South',     now() - '28 days'::INTERVAL, 'Despotato'),
  ('West',      now() - '28 days'::INTERVAL, 'UpTown Monk'),
  ('Northeast', now() - '28 days'::INTERVAL, 'UpTown Monk'),
  ('Midwest ',  now() - '26 days'::INTERVAL, 'Man''s not torrid'),
  ('South',     now() - '22 days'::INTERVAL, 'Cats that teach SQL'),
  ('West ',     now() - '20 days'::INTERVAL, 'Despotato'),
  ('Northeast', now() - '20 days'::INTERVAL, 'Shape of Pooh'),
  ('Midwest ',  now() - '19 days'::INTERVAL, 'Despotato'),
  ('West',      now() - '13 days'::INTERVAL, 'Man''s not torrid'),
  ('West ',     now() - '12 days'::INTERVAL, 'Man''s not torrid'),
  ('Midwest ',  now() - '12 days'::INTERVAL, 'Man''s not torrid'),
  ('West',      now() - '12 days'::INTERVAL, 'Man''s not torrid'),
  ('Midwest ',  now() - '5 days'::INTERVAL,  'Cats that teach SQL'),
  ('Northeast', now() - '3 days'::INTERVAL,  'Cats that teach SQL'),
  ('South',     now() - '3 days'::INTERVAL,  'Despotato'),
  ('South',     now() - '3 days'::INTERVAL,  'Man''s not torrid'),
  ('South',     now() - '2 days'::INTERVAL,  'Man''s not torrid'),
  ('Northeast', now() - '10 hours'::INTERVAL, 'Shape of Pooh');


COMMIT;