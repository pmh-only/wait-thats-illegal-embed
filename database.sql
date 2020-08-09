create user embedmaker@localhost;
create schema embedmaker;
grant all privileges on embedmaker.* to embedmaker@localhost;

use embedmaker;

create table embeds
(
	id varchar(8) not null,
	header text null,
	title text null,
	description text null,
	image text null,
	bigimg boolean default false not null
);

create unique index embeds_id_uindex
	on embeds (id);

alter table embeds
	add constraint embeds_pk
		primary key (id);

alter table embeds
	add color text default '#2f3136' not null;

alter table embeds modify id varchar(10) not null;

INSERT INTO embeds (id, header, title, description, image, bigimg, color) VALUES ('-', 'pmh.codes', 'Discord Embed Maker', 'Made By @pmh-only', 'https://avatars0.githubusercontent.com/u/39158228?s=460&u=85a513dbfe77b73d9f7aa9c85e3e973cb69caba6&v=4', 0, '#6bedd4')
