-- Table: jpmorgan.temp

-- DROP TABLE jpmorgan.temp;


CREATE TABLE jpmorgan.temp
( 
    id SERIAL,
    symbol character varying(10) COLLATE pg_catalog."default" NOT NULL,
    date timestamp without time zone NOT NULL,
    open double precision NOT NULL,
    high double precision NOT NULL,
    low double precision NOT NULL,
    close double precision NOT NULL,
    adjclose double precision NOT NULL,
    volume bigint NOT NULL,
    CONSTRAINT temp_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE jpmorgan.temp
    OWNER to postgres;