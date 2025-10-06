create table
    items (
        id serial primary key,
        title text not null,
        content text,
        created_at timestamptz default now ()
    );