using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using salesCRMWebApi.Models;

namespace salesCRMWebApi.Controllers
{
    public class leadsController : ApiController
    {
        private GatewaySalesCRMEntities db = new GatewaySalesCRMEntities();

        // GET: api/leads
        public IQueryable<lead> Getleads()
        {
            return db.leads;
        }

        // GET: api/leads/5
        [ResponseType(typeof(lead))]
        public IHttpActionResult Getlead(int id)
        {
            lead lead = db.leads.Find(id);
            if (lead == null)
            {
                return NotFound();
            }

            return Ok(lead);
        }

        // PUT: api/leads/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putlead(int id, lead lead)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != lead.id)
            {
                return BadRequest();
            }

            db.Entry(lead).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!leadExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/leads
        [ResponseType(typeof(lead))]
        public IHttpActionResult Postlead(lead lead)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.leads.Add(lead);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = lead.id }, lead);
        }

        // DELETE: api/leads/5
        [ResponseType(typeof(lead))]
        public IHttpActionResult Deletelead(int id)
        {
            lead lead = db.leads.Find(id);
            if (lead == null)
            {
                return NotFound();
            }

            db.leads.Remove(lead);
            db.SaveChanges();

            return Ok(lead);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool leadExists(int id)
        {
            return db.leads.Count(e => e.id == id) > 0;
        }
    }
}