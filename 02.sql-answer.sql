
--- first question
select persons.name as name, items.name as item, items.price::int4 * transactions.total as total_price, transactions.date as "time" from persons
join transactions ON persons.id = transactions.person_id
join items on items.id = transactions.item_id;

--- second question
select persons.name as name, items.name as item, items.price::int4 * transactions.total as total_price, transactions.date as "time" from persons
join transactions ON persons.id = transactions.person_id
join items on items.id = transactions.item_id where transactions.date between '2020/01/01' and '2020/05/25';


--- third question
select persons.name as name, items.name as item, transactions.total as total_items ,items.price::int4 * transactions.total as total_price, transactions.date as "time" from persons
join transactions ON persons.id = transactions.person_id
join items on items.id = transactions.item_id
order by transactions.total desc;