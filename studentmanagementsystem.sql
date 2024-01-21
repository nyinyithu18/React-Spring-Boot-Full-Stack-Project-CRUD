--
-- PostgreSQL database dump
--

-- Dumped from database version 10.23
-- Dumped by pg_dump version 10.23

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: student; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student (
    st_id bigint NOT NULL,
    name character varying NOT NULL,
    age bigint NOT NULL,
    nrc character varying NOT NULL,
    phone character varying,
    email character varying,
    address character varying
);


ALTER TABLE public.student OWNER TO postgres;

--
-- Name: student_st_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.student ALTER COLUMN st_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.student_st_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: student; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student (st_id, name, age, nrc, phone, email, address) FROM stdin;
2	nyithu	12	5/WaLaNa(N)000000	93739	nigi353@gmail.com	mandalay
21	Htet Phyo Wai	34	5/WaLaNa(N)122222	09986967065	nyithu185@gmail.com	Sagaing
33	Foe Chit	20	5/WaLaNa(N)223	45678903	sone@gmail.com	Pyin Oo Lwin
32	nyi nyi thu	32	5/WaLaNa(N)234	09986967065	nyithu185@gmail.com	Yangon
\.


--
-- Name: student_st_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.student_st_id_seq', 36, true);


--
-- Name: student student_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_pkey PRIMARY KEY (st_id);


--
-- PostgreSQL database dump complete
--

